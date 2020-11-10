module.exports = function compiler(instance) {
  instance.run((err, stats) => {
    if (err) {
      console.error(err);
      return;
    }

    const info = stats.toJson();
    if (stats.hasErrors()) {
      console.error(info.erorrs);
    }

    if (stats.hasWarnings()) {
      console.warn(info.warns);
    }

    console.log(
      stats.toString({
        colors: true,
      })
    );
  });
};
