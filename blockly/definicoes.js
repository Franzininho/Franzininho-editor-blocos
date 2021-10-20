Blockly.Blocks['importarboard'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Importar BOARD");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(135);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['importardigitalio'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Importar DIGITAL IO");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(135);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['importar_neopixel_write'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Importar Neopixel");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(135);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['importar_configurar_neopixel'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Configurar Led Neopixel");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(135);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['acender_neopixel'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Acender Led Neopixel");
    this.appendDummyInput()
        .appendField("Cor vermelha:")
        .appendField(new Blockly.FieldNumber(0, 0, 255), "R");
    this.appendDummyInput()
        .appendField("Cor verde      :")
        .appendField(new Blockly.FieldNumber(0, 0, 255), "G");
    this.appendDummyInput()
        .appendField("Cor azul        :")
        .appendField(new Blockly.FieldNumber(0, 0, 255), "B");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(135);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['import_time'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Importar Time");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(135);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['pausa'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Tempo de pausa");
    this.appendDummyInput()
        .appendField("Tempo:  ")
        .appendField(new Blockly.FieldNumber(0, 0, 100), "P");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(135);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['rainbow_effect'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Efeitor Rainbow");
    this.appendDummyInput()
        .appendField("Tempo:")
        .appendField(new Blockly.FieldNumber(100, 1, 100), "t")
        .appendField("ms");
    this.appendDummyInput()
        .appendField("Repetir:")
        .appendField(new Blockly.FieldNumber(1, 1, 100), "v")
        .appendField("vezes");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};