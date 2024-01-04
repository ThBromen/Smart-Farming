import { Contact } from "../../Models";
import { catchAsync } from "../../Controllers/Error";

export const createContact = catchAsync(async (req, res) => {
    const newContact = await Contact.create(req.body);

    console.log("New contact was created successfully", newContact);

    return res.status(201).json({
        message: "Contact added successfully",
        newContact,
    });
});

export const getContacts = catchAsync(async (req, res) => {
    const contacts = await Contact.find();
    res.status(200).send(contacts);
});

export const deleteContact = catchAsync(async (req, res) => {
    const deletedContact = await Contact.findByIdAndDelete(req.params.id);
    if (!deletedContact) {
        res.status(404).send();
    } else {
        res.status(200).send(deletedContact);
    }
});

export const getContactById = catchAsync(async (req, res) => {
    const foundContact = await Contact.findById(req.params.id);
    if (!foundContact) {
        res.status(404).send();
    } else {
        res.status(200).send(foundContact);
    }
});

export const updateContactById = catchAsync(async (req, res) => {
    const updatedContact = await Contact.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedContact) {
        res.status(404).send();
    } else {
        res.status(200).send(updatedContact);
    }
});
