const { series, parallel, watch } = require("gulp");
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
  },
  watch: (cb) => {
    watch("./docs/**/*.adoc", asciidoctor.build);
    cb();
  }
}

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
  },
  watch: (cb) => {
    const webpack = require("webpack");
    const webpackConfig = require("./webpack.config.js");
    const compiler = webpack(webpackConfig);
    compiler.watch({}, (err, stats) => {
      if (err || stats.hasErrors()) {
        console.error(err);
      }
    });
    cb();
  },
}

const jest = {
  test: (cb) => {
    const jest = require("jest");
    jest.run(["--coverage"]);
    cb();
  },
  watch: (cb) => {
    const jest = require("jest");
    jest.run(["--watch"]);
    cb();
  }
}

exports.build = series(webpack.clean, webpack.build, asciidoctor.clean, asciidoctor.build);
exports.test = series(jest.test);
exports.docs = series(asciidoctor.clean, asciidoctor.build);
exports.watch = parallel(webpack.watch, asciidoctor.watch, jest.watch);