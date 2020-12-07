module.exports = (sequelize, DataTypes) => {
    let Twit = sequelize.define("Twit", {
        twit: {
            type: DataTypes.STRING,
            allowNull: true
        }
    })

    Twit.associate = (models) => {
        Twit.belongsTo(models.User, {
            foreignKey: {
                allowNull: true
            }
        });
    };

    return Twit
}