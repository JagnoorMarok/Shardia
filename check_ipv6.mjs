import { NodeSSH } from 'node-ssh';

const ssh = new NodeSSH();

async function checkIpv6() {
  try {
    await ssh.connect({
      host: '192.168.1.100',
      username: 'jagnoormarok',
      password: 'Marok123'
    });
    
    // Check IPv6 addresses
    const ipRes = await ssh.execCommand('ip -6 addr show scope global');
    console.log('Global IPv6 Addresses:\n', ipRes.stdout);

    // Update Nginx to listen on IPv6
    const setupScript = `
echo Marok123 | sudo -S sed -i '/listen 80;/a \\    listen [::]:80;' /etc/nginx/sites-available/shardia
echo Marok123 | sudo -S systemctl restart nginx
    `;
    const _nginxRes = await ssh.execCommand(setupScript);
    console.log('Nginx updated to support IPv6.');
    
    ssh.dispose();
  } catch (err) {
    console.error('Error:', err);
    if(ssh) ssh.dispose();
  }
}

checkIpv6();
