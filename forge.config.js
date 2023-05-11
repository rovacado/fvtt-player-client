module.exports = {
  packagerConfig: {
    icon: 'icon/vttclienticon'
  },
  rebuildConfig: {},
  makers: [
    {
      name: '@electron-forge/maker-squirrel',
      config: {
        iconUrl: "https://github.com/rovacado/fvtt-player-client/blob/main/icon/vttclienticon.ico?raw=true",
        setupIcon: 'icon/vttclienticon.ico',
      },
    },
    {
      name: '@electron-forge/maker-zip',
      platforms: ['darwin'],
    },
    {
      name: '@electron-forge/maker-deb',
      config: {
        options: {
          icon: 'icon/vttclienticon.png',
        }
      },
    },
    {
      name: '@electron-forge/maker-rpm',
      config: {
        options: {
          icon: 'icon/vttclienticon.png',
        }
      },
    },
  ],
};
