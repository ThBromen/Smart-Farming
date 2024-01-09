
import { Cow } from "../../Models";

export const deleteCow = async (req, res) => {
    try {
        const requestEarTag = req.params.earTag;

        const data = await Cow.findOne({ earTag: requestEarTag });

        if (!data) {
            return res.status(404).json({
                status: 'fail',
                message: 'No cow found with that earTag',
            });
        }

        const result = await Cow.deleteOne({ earTag: requestEarTag });

        console.log("The cow is deleted with ear tag:", requestEarTag);
        return res.status(200).json({
            status: "success",
            message: "Cow deleted successfully",
            data: result
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Internal Server Error' });
    }
};
