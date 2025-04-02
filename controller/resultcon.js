let RESULT = require('../Model/Result')

exports.newResult = async(req,res,next) =>{

    let {wpm,cpm,mistakes,time} = req.body

    try {
        let data = await RESULT.create(req.body)

        res.status(201).json({
            status: 'success',
            message: 'Data created successfully',
            data: data
        })

    } catch (error) {

        res.status(404).json({
        
            status: 'Failed',
            message: 'An error occurred during creating',
            error: error.message
    })
    }
} 

exports.readResult = async(req,res,next) =>{

    try {
        let data = await RESULT.find()

        res.status(200).json({
            status: 'success',
            message: 'Data read successfully',
            data: data
        })

    } catch (error) {

        res.status(404).json({
        
            status: 'Failed',
            message: 'An error occurred during reading',
            error: error.message
    })
    }
} 

exports.deleteResult = async(req,res,next) =>{

    try {
        let data = await RESULT.findByIdAndDelete(req.params.id)

        res.status(200).json({
            status: 'success',
            message: 'Data deleted successfully',
            data: data
        })

    } catch (error) {

        res.status(404).json({
        
            status: 'Failed',
            message: 'An error occurred during deleting',
            error: error.message
    })
    }
} 