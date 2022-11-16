import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('dbusers', 'root', null, {
    host: 'localhost',
    dialect: 'mysql',
    logging: false
});

const testConnectionDB = async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}
testConnectionDB();