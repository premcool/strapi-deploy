export default ({ env }) => ({
  email: {
    config: {
      provider: 'sendmail',  // Try full package name
      providerOptions: {
        host: env('SMTP_HOST', 'box.prolysi.com'),
        port: env.int('SMTP_PORT', 587),
        secure: false,
        auth: {
          user: env('SMTP_USER', 'prem@prems.in'),
          pass: env('SMTP_PASS'),
        },
      },
      settings: {
        defaultFrom: 'prem@prems.in',
        defaultReplyTo: 'prem@prems.in',
      },
    },
  },
});
