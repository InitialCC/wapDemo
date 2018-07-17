exports.install = (Vue, options) => {
    Vue.prototype.goPages = function (url) {
        let _this = this;
        _this.$router.push(url);
    };
}
