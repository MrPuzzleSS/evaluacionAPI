const {Schema, model}=require('mongoose')

const EstudianteSchema = Schema ({
    documento:{
        type: Number,
        required: [true, 'El documento es requerido']
    },
    nombre:{
        type:String,
        required: [true, 'El nombre es requerido']
    },
    nota1:{
        type:Number,
        required:[true, 'La nota1 es requerida'],
        min: [0, 'La nota minima es 0'],
        max: [5.0, 'La nota maxima es 5.0']
    },
    nota2:{
        type:Number,
        required:[true, 'La nota1 es requerida'],
        min: [0, 'La nota minima es 0'],
        max: [5.0, 'La nota maxima es 5.0']
    },
    nota3:{
        type:Number,
        required:[true, 'La nota1 es requerida'],
        min: [0, 'La nota minima es 0'],
        max: [5.0, 'La nota maxima es 5.0']
    },
    promedio:{
        type:Number
    }
})

module.exports = model('Estudiante', EstudianteSchema);