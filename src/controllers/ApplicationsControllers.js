const Layout = require('../models/ApplicationsModels'); // Assuming Layout model is defined as in the previous step

// Получить layout по имени
const getLayout = async (req, res) => {
    try {
        const layout = await Layout.findOne({ layoutName: 'mars-header' });

        if (!layout) {
            return res.status(404).json({ msg: 'Layout not found' });
        }

        res.status(200).json({ msg: 'Layout retrieved successfully', data: layout });
    } catch (error) {
        res.status(500).json({ msg: 'Server error', error: error.message });
    }
};

// Создать или обновить layout
const createOrUpdateLayout = async (req, res) => {
    const { layoutName, layoutObject } = req.body;

    if (!layoutName || !layoutObject) {
        return res.status(400).json({ msg: 'Please provide layoutName and layoutObject' });
    }

    try {
        let layout = await Layout.findOne({ layoutName });

        if (layout) {
            // If layout exists, update it
            layout.layoutObject = layoutObject;
            await layout.save();
            res.status(200).json({ msg: 'Layout updated successfully', data: layout });
        } else {
            // If layout does not exist, create a new one
            layout = new Layout({ layoutName, layoutObject });
            await layout.save();
            res.status(201).json({ msg: 'Layout created successfully', data: layout });
        }
    } catch (error) {
        res.status(500).json({ msg: 'Server error', error: error.message });
    }
};

// Обновить layout
const updateLayout = async (req, res) => {
    const { id } = req.params;
    const { layoutObject } = req.body;

    if (!layoutObject) {
        return res.status(400).json({ msg: 'Please provide layoutObject' });
    }

    try {
        const layout = await Layout.findByIdAndUpdate(id, { layoutObject }, { new: true });

        if (!layout) {
            return res.status(404).json({ msg: 'Layout not found' });
        }

        res.status(200).json({ msg: 'Layout updated successfully', data: layout });
    } catch (error) {
        res.status(500).json({ msg: 'Server error', error: error.message });
    }
};

// Удалить layout
const deleteLayout = async (req, res) => {
    const { id } = req.params;

    try {
        const layout = await Layout.findByIdAndDelete(id);

        if (!layout) {
            return res.status(404).json({ msg: 'Layout not found' });
        }

        res.status(200).json({ msg: 'Layout deleted successfully' });
    } catch (error) {
        res.status(500).json({ msg: 'Server error', error: error.message });
    }
};

const getApplications = async (req, res) => {
    try {
        const applications = await Application.find();
        res.status(200).json(applications);
    } catch (error) {
        res.status(500).json({ msg: 'Server error', error: error.message });
    }
};


module.exports = {
    getApplications,
    createOrUpdateLayout,
    updateLayout,
    deleteLayout,
};
