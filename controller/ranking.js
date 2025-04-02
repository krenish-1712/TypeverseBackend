let RANKING = require('../Model/Ranking')

exports.Fetchdata = async (req,res,next)=>{

    
    try {
        let data = await RANKING.find().populate("wpm")

        res.status(200).json({
            status: 'success',
            message: 'Data fetched successfully',
            data: data
        })
    } catch (error) {
        
        res.status(404).json({
            status:'error',
            messsage:'An error occurred during fetching',
            error : error.message
        })
    }

} 