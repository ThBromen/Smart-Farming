import { Cow } from "../../Models";

export const deleteCow = async (req, res) => {
    try {
        const requestId = req.params.id;  // Use req.params.id, not req.params._id

        console.log("Deleting cow with ID:", requestId);

        // Find and delete the cow document by _id
        const deletedCow = await Cow.findOneAndDelete({ _id: requestId });

        console.log("Result of findOneAndDelete:", deletedCow);

        if (!deletedCow) {
            return res.status(404).json({
                status: 'fail',
                message: 'No cow found with that ID',
            });
        }

        // Log the success and send the deleted document as a response
        console.log("The cow is deleted with ID:", requestId);
        return res.status(200).json({
            status: "success",
            message: "Cow deleted successfully",
            data: deletedCow
        });
    } catch (error) {
        console.error("Error deleting cow:", error);
        return res.status(500).json({ message: 'Internal Server Error' });
    }
};
