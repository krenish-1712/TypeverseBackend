let PARAGRAPH = require('../Model/Paragraph')

exports.newParagraph = async(req,res,next) =>{

    let {text} = req.body

    try {
        let data = await PARAGRAPH.create(req.body)

        res.status(201).json({
            status: 'success',
            message: 'Data created successfully',
            data
        })

    } catch (error) {

        res.status(404).json({
        
            status: 'Failed',
            message: 'An error occurred during creating',
            error: error.message
    })
    }
}

exports.readParagraph = async(req,res,next) =>{

    try {
        let data = await PARAGRAPH.find();

        res.status(200).json({
            status: 'success',
            message: 'Data read successfully',
            data : data
        })

    } catch (error) {

        res.status(404).json({
        
            status: 'Failed',
            message: 'An error occurred during reading',
            error: error.message
    })
    }
} 

exports.deleteParagraph = async(req,res,next) =>{

    try {
        let data = await PARAGRAPH.findByIdAndDelete(req.params.id)

        res.status(200).json({
            status: 'success',
            message: 'Data delete successfully',
            data: data
        })

    } catch (error) {

        res.status(404).json({
        
            status: 'Failed',
            message: 'An error occurred during delete',
            error: error.message
    })
    }
} 

exports.updateParagraph = async(req,res,next) =>{

    let {text} = req.body

    try {
        let data = await PARAGRAPH.findByIdAndUpdate(req.params.id,req.body)

        res.status(200).json({
            status: 'success',
            message: 'Data update successfully',
            data: data
        })

    } catch (error) {

        res.status(404).json({
        
            status: 'Failed',
            message: 'An error occurred during update',
            error: error.message
    })
    }
}