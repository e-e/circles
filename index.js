const path = require('path');
const express = require('express');

module.exports = {
  addRoutes(mountPath, parentApp) {
    parentApp.use(mountPath, express.static(path.join(__dirname, './public')));
    parentApp.get(mountPath, (req, res) => {
      res.sendFile(path.join(__dirname, './public/index.html'));
    });
  }
};
