const { MongoClient } = require('mongodb');
require('dotenv').config();

const uri = process.env.MONGODB_URI;

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

const provincias = [
    { nombre: 'Azua', region: 'South' },
    { nombre: 'Baoruco', region: 'South' },
    { nombre: 'Barahona', region: 'South' },
    { nombre: 'Dajabón', region: 'Northeast' },
    { nombre: 'Distrito Nacional', region: 'Ozama' },
    { nombre: 'Duarte', region: 'Northeast' },
    { nombre: 'Elías Piña', region: 'South' },
    { nombre: 'El Seibo', region: 'East' },
    { nombre: 'Espaillat', region: 'North' },
    { nombre: 'Hato Mayor', region: 'East' },
    { nombre: 'Hermanas Mirabal', region: 'Northeast' },
    { nombre: 'Independencia', region: 'South' },
    { nombre: 'La Altagracia', region: 'East' },
    { nombre: 'La Romana', region: 'East' },
    { nombre: 'La Vega', region: 'North' },
    { nombre: 'María Trinidad Sánchez', region: 'NordEast' },
    { nombre: 'Monseñor Nouel', region: 'North' },
    { nombre: 'Monte Cristi', region: 'Northeast' },
    { nombre: 'Monte Plata', region: 'Ozama' },
    { nombre: 'Pedernales', region: 'South' },
    { nombre: 'Peravia', region: 'South' },
    { nombre: 'Puerto Plata', region: 'North' },
    { nombre: 'Samaná', region: 'NordEast' },
    { nombre: 'San Cristóbal', region: 'Ozama' },
    { nombre: 'San José de Ocoa', region: 'South' },
    { nombre: 'San Juan', region: 'South' },
    { nombre: 'San Pedro de Macorís', region: 'East' },
    { nombre: 'Sánchez Ramírez', region: 'North' },
    { nombre: 'Santiago', region: 'North' },
    { nombre: 'Santiago Rodríguez', region: 'Northeast' },
    { nombre: 'Santo Domingo', region: 'Ozama' },
    { nombre: 'Valverde', region: 'Northeast' }
];

async function main() {
    try {
        await client.connect();

        const database = client.db('dominican_republic');
        const collection = database.collection('provinces');

        await collection.insertMany(provincias);
        console.log('Data inserted correctly');

        const results = await collection.find({}).toArray();
        console.log('Collections data:');
        console.log(results);
    } catch (error) {
        console.error('Error:', error);
    } finally {
        await client.close();
    }
}

main().catch(console.error);