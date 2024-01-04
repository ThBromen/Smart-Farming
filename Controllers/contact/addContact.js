import { Contact } from "../../Models";

export const createContact = async (req, res) => {
    try {
        const contact = new Contact(req.body);
        await contact.save();
        res.status(201).send(contact);
    } catch (error) {
        res.status(400).send(error);
    }
};

export const getContacts = async (req, res) => {
    try {
        const contacts = await Contact.find();
        res.status(200).send(contacts);
    } catch (error) {
        res.status(404).send(error);
    }
};

export const deleteContact = async (req, res) => {
    try {
        const contact = await Contact.findByIdAndDelete(req.params.id);
        if (!contact) {
            res.status(404).send();
        } else {
            res.status(200).send(contact);
        }
    } catch (error) {
        res.status(500).send(error);
    }
};

export const getContactById = async (req, res) => {
    try {
        const contact = await Contact.findById(req.params.id);
        if (!contact) {
            res.status(404).send();
        } else {
            res.status(200).send(contact);
        }
    } catch (error) {
        res.status(500).send(error);
    }
};

export const updateContactById = async (req, res) => {
    try {
        const contact = await Contact.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!contact) {
            res.status(404).send();
        } else {
            res.status(200).send(contact);
        }
    } catch (error) {
        res.status(500).send(error);
    }
};


