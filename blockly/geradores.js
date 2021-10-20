Blockly.Python['importarboard'] = function(block) {
  // TODO: Assemble Python into code variable.
  var code = 'import board\n';
  return code;
};

Blockly.Python['importardigitalio'] = function(block) {
  // TODO: Assemble Python into code variable.
  var code = 'import digitalio\n';
  return code;
};

Blockly.Python['importar_neopixel_write'] = function(block) {
  // TODO: Assemble Python into code variable.
  var code = 'import neopixel_write\n';
  return code;
};

Blockly.Python['importar_configurar_neopixel'] = function(block) {
  // TODO: Assemble Python into code variable.
  var code = 'pin = digitalio.DigitalInOut(board.NEOPIXEL)\npin.direction = digitalio.Direction.OUTPUT\n';
  return code;
};

Blockly.Python['acender_neopixel'] = function(block) {
  var r = block.getFieldValue('R');
  var g = block.getFieldValue('G');
  var b = block.getFieldValue('B');
  // TODO: Assemble Python into code variable.
  var code = 'neopixel_write.neopixel_write(pin, bytearray([' +r+ ' ,' +g+ ',' +b+ ']))\n';
  return code;
};

Blockly.Python['import_time'] = function(block) {
  // TODO: Assemble Python into code variable.
  var code = 'import time\n';
  return code;
};

Blockly.Python['pausa'] = function(block) {
  var p = block.getFieldValue('P');
  // TODO: Assemble Python into code variable.
  var code = 'time.sleep('+p+')\n';
  return code;
};

Blockly.Python['rainbow_effect'] = function(block) {
  var t = block.getFieldValue('t');
  var v = block.getFieldValue('v');
  // TODO: Assemble Python into code variable.
  var code = 'for i in range(0, ' +v+ '):\n';
  code    += '   for r in range(0, 255):\n';
  code    += '      for g in range(0, 255):\n';
  code    += '         for b in range(0, 255):\n';
  code    += '            neopixel_write.neopixel_write(pin, bytearray([r,g,b]))\n';
  code    += '            time.sleep('+t+')\n\n';
  return code;
};