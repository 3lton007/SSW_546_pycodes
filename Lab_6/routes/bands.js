const express = require("express");
const router = express.Router();
const data = require("../data");
const userData = data.bands;

router.get('/:id', async (req, res) => {
  try {
    let userbands = await userData.getBand(req.params.id);
    res.json(userbands);
  } catch (e) {
    res.status(404).json({error: 'Band not found'});
  }
});

router.get('/', async (req, res) => {
  try {
    let BandList = await userData.getAllBands();
    res.json(BandList);
  } catch (e) {
    res.sendStatus(500);
  }
});

router.post('/', async (req, res) => {
  let BandInfo = req.body;

  if (!BandInfo) {
    res.status(400).json({error: 'You must provide data to create a band'});
    return;
  }

  if (!BandInfo.bandName) {
    res.status(400).json({error: 'You must provide a band name'});
    return;
  }

  if (!BandInfo.bandMembers) {
    res.status(400).json({error: 'You must provide a Band members'});
    return;
  }

  if (!BandInfo.yearFormed) {
    res.status(400).json({error: 'You must provide a yearFormed'});
    return;
  }

  if (!BandInfo.genres) {
    res.status(400).json({error: 'You must provide a gernes'});
    return;
  }

  if (!BandInfo.albums) {
    res.status(400).json({error: 'You must provide a albums'});
    return;
  }

  
  if (!BandInfo.recordLabel) {
    res.status(400).json({error: 'You must provide a recordLabel'});
    return;
  }


  try {
    const newband = await userData.addBand(BandInfo.bandName, BandInfo.bandMembers, BandInfo.yearFormed, BandInfo.genres, BandInfo.albums, BandInfo.recordLabel);
    res.json(newband);
  } catch (e) {
    res.sendStatus(500);
  }
});



router.put('/:id', async (req, res) => {
  let BandInfo = req.body;

  if (!BandInfo) {
    res.status(400).json({error: 'You must provide a band name'});
    return;
  }

  if (!BandInfo.bandName) {
    res.status(400).json({error: 'You must provide a band name'});
    return;
  }

  if (!BandInfo.bandMembers) {
    res.status(400).json({error: 'You must provide a Band members'});
    return;
  }

  if (!BandInfo.yearFormed) {
    res.status(400).json({error: 'You must provide a yearFormed'});
    return;
  }

  if (!BandInfo.genres) {
    res.status(400).json({error: 'You must provide a genre'});
    return;
  }

  if (!BandInfo.albums) {
    res.status(400).json({error: 'You must provide a albums'});
    return;
  } 

  
  if (!BandInfo.recordLabel) {
    res.status(400).json({error: 'You must provide a recordLabel'});
    return;
  }

  try {
    await userData.getBand(req.params.id);
  } catch (e) {
    res.status(404).json({error: 'Band not found'});
    return;
  }
  try {
    const updatedBand = await userData.updateBand(req.params.id, BandInfo.bandName, BandInfo.bandMembers, BandInfo.yearFormed, BandInfo.genres, BandInfo.albums, BandInfo.recordLabel);
    res.json(updatedBand);
  } catch (e) {
    res.sendStatus(500);
  }
});



router.delete('/:id', async (req, res) => {
  try {
    await userData.getBand(req.params.id);
  } catch (e) {
    res.status(404).json({error: 'band not found'});
    return;
  }

  try {
    await userData.removeBand(req.params.id);
    res.json()
  } catch (e) {
    res.sendStatus(500).json({error: invalid});
  }
});

module.exports = router;

