(function (lib, img, cjs, ss) {
  var p; // shortcut to reference prototypes

  // library properties:
  lib.properties = {
    width: 566,
    height: 400,
    fps: 24,
    color: "#FFFFFF",
    opacity: 1.0,
    manifest: [
      { src: "images/одель_.jpg?1726162726468", id: "одель" },
      {
        src: "sounds/амперметрonlineaudioconvertercom.mp3?1726162726468",
        id: "амперметрonlineaudioconvertercom",
      },
      { src: "sounds/вольтметр_.mp3?1726162726468", id: "вольтметр" },
      { src: "sounds/выпрямитель_.mp3?1726162726468", id: "выпрямитель" },
      { src: "sounds/ин_.mp3?1726162726468", id: "ин" },
      { src: "sounds/лампа_.mp3?1726162726468", id: "лампа" },
      { src: "sounds/миллиамперметр_.mp3?1726162726468", id: "миллиамперметр" },
      {
        src: "sounds/энonlineaudioconvertercom.mp3?1726162726468",
        id: "энonlineaudioconvertercom",
      },
    ],
  };

  lib.ssMetadata = [];

  // symbols:

  (lib.одель = function () {
    this.initialize(img.одель);
  }).prototype = p = new cjs.Bitmap();
  p.nominalBounds = new cjs.Rectangle(0, 0, 1280, 960);

  (lib.ЭнЗвук = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // timeline functions:
    this.frame_2 = function () {
      playSound("энonlineaudioconvertercom");
    };

    // actions tween:
    this.timeline.addTween(
      cjs.Tween.get(this).wait(2).call(this.frame_2).wait(2)
    );

    // Слой 1
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f("#000000")
      .s()
      .p(
        "AlpFqQiWiWAAjUQAAjTCWiWQCWiWDTAAQDUAACWCWQCWCWAADTQAADUiWCWQiWCWjUAAQjTAAiWiWg"
      );
    this.shape.setTransform(0.3, 1.3);
    this.shape._off = true;

    this.timeline.addTween(
      cjs.Tween.get(this.shape).wait(3).to({ _off: false }, 0).wait(1)
    );
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = null;

  (lib.Реагирование = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // timeline functions:
    this.frame_2 = function () {
      playSound("амперметрonlineaudioconvertercom");
    };

    // actions tween:
    this.timeline.addTween(
      cjs.Tween.get(this).wait(2).call(this.frame_2).wait(2)
    );

    // Слой 1
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f("#000000")
      .s()
      .p(
        "AlpFqQiWiWAAjUQAAjTCWiWQCWiWDTAAQDUAACWCWQCWCWAADTQAADUiWCWQiWCWjUAAQjTAAiWiWg"
      );
    this.shape.setTransform(0.3, 1.3);
    this.shape._off = true;

    this.timeline.addTween(
      cjs.Tween.get(this.shape).wait(3).to({ _off: false }, 0).wait(1)
    );
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = null;

  (lib.МиллиЗвук = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // timeline functions:
    this.frame_2 = function () {
      playSound("миллиамперметр");
    };

    // actions tween:
    this.timeline.addTween(
      cjs.Tween.get(this).wait(2).call(this.frame_2).wait(2)
    );

    // Слой 1
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f("#000000")
      .s()
      .p(
        "AlpFqQiWiWAAjUQAAjTCWiWQCWiWDTAAQDUAACWCWQCWCWAADTQAADUiWCWQiWCWjUAAQjTAAiWiWg"
      );
    this.shape.setTransform(0.3, 1.3);
    this.shape._off = true;

    this.timeline.addTween(
      cjs.Tween.get(this.shape).wait(3).to({ _off: false }, 0).wait(1)
    );
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = null;

  (lib.ЛампаЗВук = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // timeline functions:
    this.frame_2 = function () {
      playSound("лампа");
    };

    // actions tween:
    this.timeline.addTween(
      cjs.Tween.get(this).wait(2).call(this.frame_2).wait(2)
    );

    // Слой 1
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f("#000000")
      .s()
      .p(
        "AlpFqQiWiWAAjUQAAjTCWiWQCWiWDTAAQDUAACWCWQCWCWAADTQAADUiWCWQiWCWjUAAQjTAAiWiWg"
      );
    this.shape.setTransform(0.3, 1.3);
    this.shape._off = true;

    this.timeline.addTween(
      cjs.Tween.get(this.shape).wait(3).to({ _off: false }, 0).wait(1)
    );
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = null;

  (lib.ИнЗвук = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // timeline functions:
    this.frame_2 = function () {
      playSound("ин");
    };

    // actions tween:
    this.timeline.addTween(
      cjs.Tween.get(this).wait(2).call(this.frame_2).wait(2)
    );

    // Слой 1
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f("#000000")
      .s()
      .p(
        "AlpFqQiWiWAAjUQAAjTCWiWQCWiWDTAAQDUAACWCWQCWCWAADTQAADUiWCWQiWCWjUAAQjTAAiWiWg"
      );
    this.shape.setTransform(0.3, 1.3);
    this.shape._off = true;

    this.timeline.addTween(
      cjs.Tween.get(this.shape).wait(3).to({ _off: false }, 0).wait(1)
    );
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = null;

  (lib.ВыпрямительЗВук = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // timeline functions:
    this.frame_2 = function () {
      playSound("выпрямитель");
    };

    // actions tween:
    this.timeline.addTween(
      cjs.Tween.get(this).wait(2).call(this.frame_2).wait(2)
    );

    // Слой 1
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f("#000000")
      .s()
      .p(
        "AlpFqQiWiWAAjUQAAjTCWiWQCWiWDTAAQDUAACWCWQCWCWAADTQAADUiWCWQiWCWjUAAQjTAAiWiWg"
      );
    this.shape.setTransform(0.3, 1.3);
    this.shape._off = true;

    this.timeline.addTween(
      cjs.Tween.get(this.shape).wait(3).to({ _off: false }, 0).wait(1)
    );
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = null;

  (lib.ВольтметрЗВук = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // timeline functions:
    this.frame_2 = function () {
      playSound("вольтметр");
    };

    // actions tween:
    this.timeline.addTween(
      cjs.Tween.get(this).wait(2).call(this.frame_2).wait(2)
    );

    // Слой 1
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f("#000000")
      .s()
      .p(
        "AlpFqQiWiWAAjUQAAjTCWiWQCWiWDTAAQDUAACWCWQCWCWAADTQAADUiWCWQiWCWjUAAQjTAAiWiWg"
      );
    this.shape.setTransform(0.3, 1.3);
    this.shape._off = true;

    this.timeline.addTween(
      cjs.Tween.get(this.shape).wait(3).to({ _off: false }, 0).wait(1)
    );
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = null;

  // stage content:

  (lib.картаУстановки = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Слой 1
    this.instance = new lib.ЭнЗвук();
    this.instance.parent = this;
    this.instance.setTransform(470.2, 221.2);
    new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.ЭнЗвук(), 3);

    this.instance_1 = new lib.ЛампаЗВук();
    this.instance_1.parent = this;
    this.instance_1.setTransform(88.6, 86.8);
    new cjs.ButtonHelper(
      this.instance_1,
      0,
      1,
      2,
      false,
      new lib.ЛампаЗВук(),
      3
    );

    this.instance_2 = new lib.ИнЗвук();
    this.instance_2.parent = this;
    this.instance_2.setTransform(486.2, 90.8);
    new cjs.ButtonHelper(this.instance_2, 0, 1, 2, false, new lib.ИнЗвук(), 3);

    this.instance_3 = new lib.МиллиЗвук();
    this.instance_3.parent = this;
    this.instance_3.setTransform(332.6, 245.2);
    new cjs.ButtonHelper(
      this.instance_3,
      0,
      1,
      2,
      false,
      new lib.МиллиЗвук(),
      3
    );

    this.instance_4 = new lib.ВыпрямительЗВук();
    this.instance_4.parent = this;
    this.instance_4.setTransform(271, 136.3);
    new cjs.ButtonHelper(
      this.instance_4,
      0,
      1,
      2,
      false,
      new lib.ВыпрямительЗВук(),
      3
    );

    this.instance_5 = new lib.ВольтметрЗВук();
    this.instance_5.parent = this;
    this.instance_5.setTransform(202.2, 245.2);
    new cjs.ButtonHelper(
      this.instance_5,
      0,
      1,
      2,
      false,
      new lib.ВольтметрЗВук(),
      3
    );

    this.instance_6 = new lib.Реагирование();
    this.instance_6.parent = this;
    this.instance_6.setTransform(59, 238.8);
    new cjs.ButtonHelper(
      this.instance_6,
      0,
      1,
      2,
      false,
      new lib.Реагирование(),
      3
    );

    this.instance_7 = new lib.одель();
    this.instance_7.parent = this;
    this.instance_7.setTransform(0, 0, 0.469, 0.437);

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({
          state: [
            { t: this.instance_7 },
            { t: this.instance_6 },
            { t: this.instance_5 },
            { t: this.instance_4 },
            { t: this.instance_3 },
            { t: this.instance_2 },
            { t: this.instance_1 },
            { t: this.instance },
          ],
        })
        .wait(1)
    );
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(283, 200, 600.7, 419.1);
})(
  (lib = lib || {}),
  (images = images || {}),
  (createjs = createjs || {}),
  (ss = ss || {})
);
var lib, images, createjs, ss;
