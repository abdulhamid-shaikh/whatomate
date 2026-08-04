module.exports = {
  apps: [
    {
      name: 'whatsapp-server',
      script: './whatomate',
      args: 'server',
      cwd: '/websites/whatsapp/whatsapp',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1000M',
      env: {
        NODE_ENV: 'production',
        PORT: 8080
      },
      error_file: './logs/err.log',
      out_file: './logs/out.log',
      log_date_format: 'YYYY-MM-DD HH:mm Z',
      merge_logs: true
    },
    {
      name: 'whatsapp-worker',
      script: './whatomate',
      args: 'worker -workers=4',
      cwd: '/websites/whatsapp/whatsapp',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1000M',
      env: {
        NODE_ENV: 'production'
      }
    }
  ]
};
