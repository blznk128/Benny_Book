module.exports = (sequelize, DataTypes) => {
    let User = sequelize.define("User", {
        email: {
            type: DataTypes.STRING,
            allowNull: true
        },
        password: {
            type: DataTypes.STRING,
            allowNull: true
        }
    })
    // User.prototype.validPassword = function(password) {
    //     return bcrypt.compareSync(password, this.password);
    //   };

    // User.hook("beforeCreate", function(user) {
    //     user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10), null);
    //   });
    return User
}