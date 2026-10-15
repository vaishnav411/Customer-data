import custModel from "../model/cust.js"


export const createcust = async (req,res) => {
    try{
        const{name,phone,pincode,city}=req.body

        if(!name || !phone || !pincode || !city){
            return res.status(400).json({
                message : " All fields are required "
            })
        }

        const newcust = await custModel.create({
            name,
            phone,
            pincode,
            city
        })

        res.status(400).json(
            {
                message: " Customer data added successfully",
                custdata:{
                    name :newcust.name,
                    phone :newcust.phone
                }
            }
        )

    }

    catch(error){
        res.status(404).json({
            message : "Server error ",
            error:error.messge
        })
    }
}

export const deletecust = async (req, res) => {
    try {
        const { id } = req.params;

        const deletedcust = await custModel.findByIdAndDelete(id);

        if (!deletedcust) {
            return res.status(404).json({
                message: "Customer not found"
            });
        }

        res.status(200).json({
            message: "Customer deleted successfully",
            custdata: deletedcust
        });
    }

    catch (error) {
        res.status(500).json({
            message: "Server error",
            error: error.message
        });
    }
}

export const updatecust = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, phone, pincode, city } = req.body;

        if (!name || !phone || !pincode || !city) {
            return res.status(400).json({
                message: "All fields are required"
            });
        }

        const updatedcust = await custModel.findByIdAndUpdate(
            id,
            {
                name,
                phone,
                pincode,
                city
            },
            {
                new: true,
                runValidators: true
            }
        );

        if (!updatedcust) {
            return res.status(404).json({
                message: "Customer not found"
            });
        }

        res.status(200).json({
            message: "Customer updated successfully",
            custdata: updatedcust
        });
    }

    catch (error) {
        res.status(500).json({
            message: "Server error",
            error: error.message
        });
    }
};

