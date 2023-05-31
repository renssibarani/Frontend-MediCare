/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    user: {},
    token: null,
    refresh_token: null,
    url: "http://localhost:3030",
    data_pasien: {},
    no_rekam_medis: null,
  },
};

module.exports = nextConfig;
