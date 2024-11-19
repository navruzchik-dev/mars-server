const Layout = require("../models/LayoutModels");

const getLayouts = async (req, res) => {
    try {
        const layouts = await Layout.find();
        res.status(200).json({ msg: "Layouts retrieved successfully", data: layouts });
    } catch (error) {
        res.status(500).json({ msg: "Server error", error: error.message });
    }
};

const createLayout = async (req, res) => {
    const { title, description, img } = req.body;

    if (!title || !description) {
        return res.status(400).json({ msg: "Please fill all required fields" });
    }
    
    try {
        const layout = await Layout.create({
            title,
            description,
            img
        });
        res.status(201).json({ msg: "Layout created successfully", data: layout });
    } catch (error) {
        res.status(500).json({ msg: "Server error", error: error.message });
    }
};

const updateLayout = async (req, res) => {
    const { id } = req.params;
    const { title, description, img } = req.body;

    if (!title || !description || img === undefined) {
        return res.status(400).json({ msg: "Please fill all required fields" });
    }

    try {
        const layout = await Layout.findByIdAndUpdate(id, { title, description, img }, { new: true });
        if (!layout) {
            return res.status(404).json({ msg: "Layout not found" });
        }
        res.status(200).json({ msg: "Layout updated successfully", data: layout });
    } catch (error) {
        res.status(500).json({ msg: "Server error", error: error.message });
    }
};

const deleteLayout = async (req, res) => {
    const { id } = req.params;

    try {
        const layout = await Layout.findByIdAndDelete(id);
        if (!layout) {
            return res.status(404).json({ msg: "Layout not found" });
        }
        res.status(200).json({ msg: "Layout deleted successfully" });
    } catch (error) {
        res.status(500).json({ msg: "Server error", error: error.message });
    }
};

module.exports = { getLayouts, createLayout, updateLayout, deleteLayout };
