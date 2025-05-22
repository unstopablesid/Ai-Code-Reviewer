const aiService = require('../services/ai.service.js');

module.exports.getResponse = {
    async handlePrompt(req, res) {
        const prompt = req.query.prompt;

        if (!prompt) {
            return res.status(400).json({ error: 'Prompt is required' });
        }
        const response = await aiService.generateContext(prompt);
        res.json({ response });
    }
};