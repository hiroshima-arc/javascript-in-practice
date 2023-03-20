const { series } = require("gulp");
const { default: rimraf } = require("rimraf");

const asciidoctor = {
  clean: async (cb) => {
    await rimraf("./public/docs");
    cb();
  },
  build: (cb) => {
    const fs = require("fs");
    const asciidoctor = require("@asciidoctor/core")();
    const kroki = require("asciidoctor-kroki");

    const krokiRegister = () => {
      const registry = asciidoctor.Extensions.create();
      kroki.register(registry);
      return registry;
    };

    const inputRootDir = "./docs";
    const outputRootDir = "./public/docs";
    const fileNameList = fs.readdirSync(inputRootDir);
    const docs = fileNameList.filter(RegExp.prototype.test, /.*\.adoc$/);

    docs.map((input) => {
      const file = `${inputRootDir}/${input}`;
      asciidoctor.convertFile(file, {
        safe: "safe",
        extension_registry: krokiRegister(),
        to_dir: outputRootDir,
        mkdirs: true,
      });
    });
    cb();
  }
}
exports.docs = series(asciidoctor.clean, asciidoctor.build);

const webpack = {
  clean: async (cb) => {
    await rimraf("./public");
    cb();
  },

  build: (cb) => {
    const webpack = require("webpack");
    const webpackConfig = require("./webpack.config.js");
    webpack(webpackConfig, (err, stats) => {
      if (err || stats.hasErrors()) {
        console.error(err);
      }
      cb();
    });
  }
}
exports.build = series(webpack.clean, webpack.build, asciidoctor.clean, asciidoctor.build);