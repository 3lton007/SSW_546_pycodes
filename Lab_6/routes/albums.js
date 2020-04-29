const express = require('express');
const router = express.Router();
const data = require('../data');
const albumsData = data.albums;


router.get('/:id', async (req, res) => {
	try {
	  let useralbums = await albumsData.getAlbum(req.params.id);
	  res.json(useralbums);
	} catch (e) {
	  res.status(404).json({error: 'Album not found'});
	}
  });

router.get('/', async (req, res) => {
	try {
		const albumsList = await albumsData.getAllAlbums();
		res.json(albumsList);
	} catch (e) {
		res.sendStatus(500);
	}
});

router.post('/', async (req, res) => {
	const albumData = req.body;
	try {
		const { title, songs, author} = albumData;
		const newalbum = await albumsData.addAlbum(title, songs, author);
		res.json(newalbum);
	} catch (e) {
		res.status(500).json({ error: e });
	}
});


router.patch('/:id', async (req, res) => {
	const updatedData = req.body;
	try {
		await albumsData.getAlbum(req.params.id);
	} catch (e) {
		res.status(404).json({ error: 'Id not found' });
		return;
	}

	try {
		const updatedAlbum = await albumsData.updateAlbum(req.params.id, updatedData);
		res.json(updatedAlbum);
	} catch (e) {
		res.status(500).json({ error: e});
	}
});

router.delete('/:id', async (req, res) => {
	try {
		await albumsData.getAlbum(req.params.id);
		console.log("11")
	} catch (e) {
		res.status(404).json({ error: 'Album not found' });
		console.log("12")
		return;
	}
	try {
		await albumsData.removeAlbum(req.params.id);
		res.sendStatus(200);
	} catch (e) {
		res.status(500).json({ error: e });
	}
});

module.exports = router;
