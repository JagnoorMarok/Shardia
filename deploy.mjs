import { NodeSSH } from 'node-ssh';

const ssh = new NodeSSH();

async function deploy() {
  try {
    await ssh.connect({
      host: '192.168.1.100',
      username: 'jagnoormarok',
      password: 'Marok123'
    });
    console.log('Connected to SSH');

    await ssh.execCommand('mkdir -p ~/shardia-dist');
    console.log('Created temporary directory on remote');

    console.log('Uploading dist folder...');
    const failed = [];
    const successful = [];
    const status = await ssh.putDirectory('./dist', '/home/jagnoormarok/shardia-dist', {
      recursive: true,
      concurrency: 10,
      tick: function(localPath, remotePath, error) {
        if (error) {
          failed.push(localPath);
        } else {
          successful.push(localPath);
        }
      }
    });
    console.log(`Upload status: ${status ? 'success' : 'failed'}`);
    if (!status) {
        console.error('Failed transfers:', failed);
        return;
    }

    console.log('Setting up Nginx...');
    const setupScript = `
echo Marok123 | sudo -S apt-get update
echo Marok123 | sudo -S apt-get install -y nginx
echo Marok123 | sudo -S rm -rf /var/www/shardia
echo Marok123 | sudo -S mv ~/shardia-dist /var/www/shardia
echo Marok123 | sudo -S chown -R www-data:www-data /var/www/shardia
echo 'server {
    listen 80;
    server_name _;
    root /var/www/shardia;
    index index.html;
    location / {
        try_files $uri $uri/ /index.html;
    }
}' > ~/shardia.conf
echo Marok123 | sudo -S mv ~/shardia.conf /etc/nginx/sites-available/shardia
echo Marok123 | sudo -S ln -sf /etc/nginx/sites-available/shardia /etc/nginx/sites-enabled/
echo Marok123 | sudo -S rm -f /etc/nginx/sites-enabled/default
echo Marok123 | sudo -S systemctl restart nginx
    `;
    const result = await ssh.execCommand(setupScript);
    console.log('Setup output stdout:', result.stdout);
    if (result.stderr) {
        console.error('Setup error stderr:', result.stderr);
    }
    
    console.log('Deployment complete!');
    ssh.dispose();
  } catch (err) {
    console.error('Deployment failed:', err);
    ssh.dispose();
  }
}

deploy();
