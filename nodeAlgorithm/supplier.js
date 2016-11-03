var async = require('async');

var suppliersModel = [
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "4",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "5",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "6",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "7",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "8",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "9",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "4",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "5",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "6",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "7",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "8",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "9",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "4",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "5",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "6",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "7",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "8",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "9",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "4",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "5",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "6",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "7",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "8",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "9",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "4",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "5",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "6",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "7",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "8",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "9",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "4",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "5",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "6",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "7",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "8",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "9",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "4",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "5",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "6",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "7",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "8",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "9",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "4",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "5",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "6",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "7",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "8",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "9",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "4",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "5",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "6",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "7",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "8",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "9",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "4",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "5",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "6",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "7",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "8",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "9",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "4",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "5",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "6",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "7",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "8",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "9",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "4",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "5",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "6",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "7",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "8",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "9",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "4",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "5",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "6",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "7",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "8",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "9",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "4",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "5",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "6",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "7",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "8",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "9",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "4",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "5",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "6",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "7",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "8",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "9",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "4",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "5",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "6",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "7",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "8",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "9",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "4",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "5",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "6",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "7",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "8",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "9",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "4",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "5",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "6",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "7",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "8",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "9",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "4",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "5",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "6",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "7",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "8",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "9",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "4",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "5",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "6",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "7",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "8",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "9",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "4",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "5",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "6",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "7",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "8",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "9",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "4",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "5",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "6",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "7",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "8",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "9",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "4",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "5",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "6",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "7",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "8",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "9",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "4",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "5",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "6",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "7",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "8",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "9",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "4",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "5",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "6",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "7",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "8",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "9",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "4",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "5",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "6",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "7",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "8",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "9",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "4",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "5",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "6",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "7",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "8",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "9",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "4",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "5",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "6",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "7",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "8",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "9",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "4",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "5",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "6",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "7",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "8",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "9",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "4",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "5",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "6",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "7",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "8",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "9",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "4",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "5",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "6",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "7",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "8",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "9",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "4",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "5",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "6",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "7",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "8",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "9",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "4",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "5",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "6",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "7",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "8",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "9",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "4",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "5",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "6",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "7",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "8",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "9",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "4",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "5",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "6",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "7",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "8",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "9",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "4",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "5",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "6",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "7",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "8",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "9",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "4",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "5",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "6",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "7",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "8",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "9",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "4",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "5",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "6",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "7",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "8",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "9",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "4",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "5",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "6",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "7",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "8",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "9",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "4",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "5",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "6",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "7",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "8",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "9",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "4",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "5",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "6",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "7",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "8",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "9",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "4",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "5",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "6",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "7",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "8",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "9",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "4",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "5",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "6",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "7",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "8",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "9",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "4",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "5",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "6",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "7",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "8",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "9",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "4",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "5",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "6",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "7",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "8",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "9",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "4",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "5",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "6",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "7",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "8",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "9",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "4",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "5",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "6",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "7",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "8",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "9",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "4",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "5",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "6",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "7",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "8",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "9",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "4",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "5",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "6",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "7",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "8",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "9",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "4",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "5",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "6",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "7",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "8",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "9",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "4",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "5",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "6",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "7",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "8",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "9",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "4",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "5",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "6",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "7",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "8",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "9",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "4",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "5",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "6",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "7",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "8",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "9",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "4",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "5",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "6",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "7",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "8",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "9",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "4",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "5",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "6",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "7",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "8",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "9",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "4",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "5",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "6",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "7",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "8",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "9",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "4",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "5",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "6",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "7",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "8",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "9",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "4",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "5",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "6",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "7",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "8",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "9",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "4",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "5",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "6",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "7",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "8",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "9",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "4",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "5",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "6",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "7",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "8",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "9",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "4",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "5",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "6",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "7",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "8",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "9",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "4",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "5",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "6",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "7",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "8",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "9",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "4",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "5",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "6",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "7",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "8",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "9",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "4",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "5",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "6",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "7",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "8",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "9",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "4",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "5",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "6",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "7",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "8",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "9",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "4",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "5",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "6",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "7",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "8",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "9",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "4",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "5",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "6",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "7",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "8",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "9",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "4",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "5",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "6",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "7",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "8",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "9",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "4",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "5",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "6",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "7",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "8",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "9",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "4",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "5",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "6",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "7",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "8",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "9",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "4",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "5",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "6",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "7",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "8",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "9",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "4",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "5",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "6",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "7",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "8",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "9",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "4",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "5",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "6",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "7",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "8",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "9",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "4",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "5",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "6",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "7",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "8",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "9",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "4",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "5",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "6",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "7",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "8",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "9",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "4",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "5",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "6",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "7",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "8",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "9",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "4",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "5",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "6",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "7",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "8",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "9",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "4",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "5",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "6",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "7",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "8",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "9",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "4",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "5",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "6",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "7",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "8",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "9",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "4",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "5",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "6",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "7",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "8",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "9",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "4",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "5",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "6",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "7",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "8",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "9",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "4",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "5",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "6",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "7",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "8",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "9",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "4",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "5",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "6",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "7",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "8",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "9",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "4",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "5",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "6",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "7",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "8",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "9",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "4",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "5",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "6",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "7",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "8",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "9",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "4",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "5",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "6",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "7",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "8",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "9",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "4",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "5",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "6",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "7",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "8",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "9",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "4",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "5",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "6",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "7",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "8",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "9",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "4",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "5",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "6",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "7",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "8",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "9",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "4",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "5",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "6",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "7",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "8",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "9",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "4",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "5",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "6",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "7",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "8",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "9",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "4",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "5",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "6",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "7",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "8",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "9",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "4",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "5",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "6",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "7",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "8",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "9",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "4",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "5",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "6",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "7",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "8",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "9",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "4",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "5",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "6",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "7",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "8",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "9",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "4",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "5",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "6",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "7",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "8",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "9",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "4",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "5",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "6",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "7",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "8",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "9",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "4",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "5",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "6",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "7",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "8",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "9",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "4",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "5",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "6",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "7",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "8",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "9",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "4",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "5",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "6",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "7",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "8",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "9",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "4",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "5",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "6",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "7",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "8",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "9",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "4",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "5",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "6",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "7",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "8",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "9",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "4",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "5",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "6",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "7",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "8",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "9",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "4",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "5",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "6",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "7",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "8",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "9",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "4",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "5",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "6",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "7",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "8",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "9",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "4",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "5",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "6",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "7",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "8",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "9",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "4",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "5",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "6",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "7",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "8",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "9",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "4",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "5",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "6",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "7",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "8",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "9",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "4",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "5",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "6",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "7",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "8",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "9",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "4",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "5",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "6",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "7",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "8",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "9",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "4",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "5",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "6",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "7",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "8",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "9",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "4",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "5",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "6",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "7",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "8",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "9",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "4",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "5",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "6",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "7",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "8",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "9",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "4",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "5",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "6",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "7",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "8",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "9",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "4",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "5",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "6",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "7",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "8",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "9",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "4",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "5",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "6",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "7",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "8",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "9",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "4",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "5",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "6",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "7",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "8",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "9",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "4",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "5",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "6",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "7",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "8",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "9",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "4",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "5",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "6",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "7",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "8",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "9",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "4",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "5",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "6",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "7",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "8",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "9",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "4",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "5",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "6",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "7",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "8",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "9",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "4",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "5",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "6",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "7",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "8",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "9",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "4",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "5",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "6",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "7",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "8",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "9",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "4",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "5",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "6",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "7",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "8",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "9",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "4",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "5",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "6",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "7",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "8",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "9",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "4",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "5",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "6",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "7",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "8",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "9",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "4",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "5",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "6",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "7",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "8",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "9",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "4",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "5",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "6",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "7",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "8",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "9",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "4",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "5",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "6",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "7",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "8",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "9",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "4",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "5",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "6",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "7",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "8",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "9",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "4",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "5",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "6",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "7",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "8",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "9",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "4",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "5",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "6",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "7",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "8",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "9",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "4",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "5",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "6",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "7",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "8",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "9",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "4",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "5",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "6",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "7",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "8",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "9",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "4",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "5",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "6",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "7",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "8",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "9",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "4",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "5",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "6",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "7",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "8",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "9",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "4",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "5",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "6",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "7",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "8",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "9",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "4",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "5",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "6",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "7",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "8",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "9",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "4",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "5",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "6",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "7",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "8",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "9",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "4",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "5",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "6",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "7",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "8",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "9",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "4",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "5",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "6",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "7",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "8",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "9",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "4",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "5",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "6",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "7",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "8",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "9",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "4",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "5",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "6",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "7",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "8",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "9",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "4",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "5",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "6",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "7",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "8",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "9",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "4",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "5",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "6",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "7",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "8",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "9",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "4",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "5",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "6",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "7",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "8",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "9",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "4",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "5",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "6",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "7",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "8",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "9",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "4",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "5",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "6",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "7",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "8",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "9",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "4",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "5",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "6",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "7",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "8",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "9",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "4",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "5",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "6",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "7",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "8",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "9",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "4",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "5",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "6",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "7",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "8",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "9",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "4",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "5",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "6",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "7",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "8",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "9",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "4",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "5",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "6",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "7",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "8",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "9",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "4",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "5",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "6",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "7",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "8",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "9",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "4",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "5",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "6",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "7",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "8",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "9",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "4",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "5",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "6",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "7",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "8",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "9",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "4",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "5",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "6",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "7",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "8",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "9",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "4",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "5",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "6",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "7",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "8",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "9",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "4",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "5",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "6",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "7",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "8",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "9",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "4",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "5",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "6",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "7",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "8",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "9",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "4",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "5",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "6",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "7",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "8",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "9",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "4",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "5",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "6",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "7",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "8",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "9",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "4",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "5",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "6",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "7",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "8",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "9",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "4",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "5",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "6",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "7",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "8",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "9",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "4",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "5",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "6",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "7",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "8",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "9",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "4",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "5",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "6",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "7",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "8",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "9",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "4",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "5",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "6",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "7",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "8",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "9",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "4",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "5",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "6",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "7",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "8",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "9",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "4",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "5",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "6",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "7",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "8",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "9",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "4",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "5",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "6",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "7",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "8",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "9",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "4",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "5",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "6",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "7",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "8",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "9",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "4",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "5",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "6",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "7",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "8",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "9",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "4",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "5",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "6",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "7",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "8",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "9",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "4",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "5",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "6",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "7",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "8",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "9",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "4",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "5",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "6",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "7",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "8",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "9",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "4",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "5",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "6",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "7",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "8",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "9",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "4",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "5",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "6",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "7",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "8",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "9",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "4",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "5",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "6",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "7",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "8",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "9",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "4",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "5",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "6",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "7",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "8",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "9",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "4",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "5",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "6",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "7",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "8",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "9",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "4",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "5",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "6",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "7",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "8",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "9",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "4",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "5",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "6",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "7",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "8",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "9",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "4",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "5",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "6",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "7",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "8",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "9",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "4",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "5",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "6",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "7",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "8",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "9",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "4",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "5",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "6",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "7",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "8",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "9",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "4",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "5",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "6",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "7",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "8",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "9",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "4",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "5",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "6",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "7",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "8",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "9",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "4",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "5",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "6",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "7",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "8",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "9",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "4",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "5",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "6",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "7",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "8",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "9",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "4",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "5",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "6",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "7",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "8",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "9",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "4",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "5",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "6",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "7",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "8",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "9",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "4",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "5",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "6",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "7",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "8",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "9",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "4",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "5",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "6",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "7",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "8",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "9",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "4",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "5",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "6",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "7",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "8",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "9",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "4",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "5",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "6",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "7",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "8",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "9",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "4",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "5",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "6",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "7",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "8",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "9",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "4",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "5",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "6",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "7",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "8",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "9",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "4",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "5",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "6",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "7",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "8",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "9",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "4",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "5",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "6",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "7",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "8",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "9",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "4",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "5",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "6",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "7",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "8",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "9",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "4",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "5",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "6",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "7",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "8",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "9",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "4",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "5",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "6",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "7",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "8",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "9",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "4",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "5",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "6",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "7",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "8",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "9",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "4",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "5",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "6",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "7",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "8",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "9",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "4",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "5",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "6",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "7",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "8",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "9",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "4",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "5",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "6",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "7",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "8",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "9",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "4",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "5",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "6",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "7",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "8",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "9",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "4",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "5",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "6",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "7",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "8",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "9",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "4",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "5",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "6",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "7",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "8",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "9",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "4",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "5",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "6",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "7",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "8",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "9",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "4",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "5",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "6",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "7",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "8",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "9",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "4",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "5",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "6",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "7",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "8",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "9",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "4",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "5",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "6",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "7",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "8",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "9",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "4",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "5",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "6",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "7",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "8",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "9",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "4",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "5",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "6",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "7",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "8",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "9",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "4",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "5",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "6",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "7",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "8",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "9",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "4",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "5",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "6",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "7",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "8",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "9",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "4",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "5",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "6",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "7",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "8",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "9",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "4",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "5",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "6",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "7",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "8",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "9",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "4",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "5",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "6",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "7",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "8",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "9",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "4",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "5",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "6",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "7",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "8",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "9",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "4",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "5",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "6",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "7",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "8",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "9",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "4",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "5",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "6",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "7",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "8",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "9",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "4",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "5",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "6",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "7",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "8",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "9",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "4",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "5",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "6",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "7",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "8",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "9",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "4",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "5",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "6",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "7",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "8",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "9",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "4",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "5",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "6",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "7",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "8",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "9",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "4",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "5",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "6",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "7",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "8",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "9",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "4",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "5",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "6",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "7",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "8",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "9",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "4",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "5",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "6",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "7",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "8",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "9",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "4",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "5",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "6",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "7",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "8",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "9",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "4",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "5",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "6",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "7",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "8",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "9",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "4",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "5",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "6",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "7",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "8",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "9",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "4",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "5",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "6",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "7",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "8",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "9",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "4",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "5",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "6",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "7",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "8",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "9",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "4",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "5",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "6",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "7",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "8",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "9",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "4",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "5",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "6",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "7",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "8",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "9",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "4",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "5",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "6",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "7",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "8",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "9",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "4",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "5",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "6",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "7",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "8",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "9",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "4",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "5",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "6",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "7",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "8",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "9",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "4",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "5",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "6",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "7",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "8",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "9",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "4",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "5",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "6",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "7",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "8",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "9",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "4",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "5",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "6",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "7",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "8",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "9",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "4",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "5",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "6",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "7",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "8",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "9",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "4",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "5",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "6",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "7",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "8",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "9",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "4",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "5",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "6",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "7",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "8",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "9",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "4",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "5",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "6",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "7",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "8",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "9",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "4",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "5",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "6",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "7",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "8",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "9",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "4",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "5",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "6",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "7",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "8",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "9",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "4",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "5",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "6",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "7",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "8",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "9",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "4",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "5",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "6",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "7",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "8",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "9",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "4",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "5",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "6",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "7",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "8",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "9",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "4",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "5",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "6",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "7",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "8",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "9",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "4",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "5",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "6",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "7",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "8",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "9",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "4",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "5",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "6",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "7",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "8",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "9",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "4",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "5",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "6",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "7",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "8",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "9",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "4",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "5",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "6",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "7",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "8",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "9",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "4",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "5",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "6",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "7",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "8",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "9",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "4",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "5",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "6",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "7",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "8",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "9",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "4",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "5",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "6",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "7",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "8",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "9",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "4",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "5",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "6",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "7",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "8",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "9",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "4",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "5",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "6",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "7",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "8",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "9",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "4",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "5",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "6",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "7",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "8",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "9",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "4",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "5",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "6",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "7",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "8",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "9",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "4",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "5",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "6",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "7",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "8",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "9",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "4",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "5",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "6",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "7",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "8",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "9",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "4",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "5",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "6",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "7",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "8",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "9",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "4",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "5",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "6",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "7",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "8",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "9",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "4",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "5",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "6",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "7",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "8",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "9",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "4",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "5",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "6",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "7",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "8",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "9",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "4",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "5",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "6",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "7",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "8",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "9",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "4",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "5",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "6",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "7",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "8",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "9",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "4",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "5",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "6",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "7",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "8",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "9",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "4",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "5",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "6",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "7",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "8",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "9",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "4",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "5",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "6",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "7",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "8",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "9",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "4",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "5",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "6",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "7",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "8",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "9",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "4",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "5",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "6",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "7",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "8",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "9",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "4",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "5",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "6",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "7",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "8",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "9",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "4",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "5",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "6",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "7",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "8",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "9",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "4",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "5",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "6",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "7",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "8",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "9",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "4",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "5",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "6",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "7",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "8",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "9",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "4",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "5",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "6",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "7",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "8",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "9",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "4",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "5",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "6",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "7",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "8",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "9",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "4",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "5",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "6",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "7",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "8",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "9",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "4",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "5",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "6",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "7",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "8",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "9",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "4",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "5",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "6",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "7",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "8",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "9",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "4",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "5",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "6",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "7",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "8",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "9",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "4",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "5",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "6",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "7",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "8",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "9",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "4",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "5",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "6",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "7",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "8",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "9",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "4",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "5",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "6",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "7",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "8",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "9",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "4",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "5",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "6",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "7",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "8",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "9",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "4",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "5",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "6",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "7",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "8",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "9",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "4",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "5",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "6",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "7",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "8",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "9",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "4",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "5",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "6",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "7",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "8",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "9",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "4",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "5",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "6",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "7",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "8",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "9",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "4",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "5",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "6",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "7",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "8",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "9",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "4",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "5",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "6",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "7",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "8",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "9",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "4",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "5",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "6",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "7",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "8",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "9",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "4",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "5",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "6",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "7",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "8",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "9",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "4",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "5",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "6",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "7",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "8",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "9",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "4",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "5",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "6",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "7",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "8",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "9",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "4",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "5",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "6",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "7",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "8",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "9",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "4",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "5",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "6",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "7",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "8",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "9",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "4",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "5",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "6",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "7",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "8",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "9",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "4",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "5",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "6",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "7",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "8",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "9",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "4",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "5",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "6",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "7",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "8",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "9",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "4",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "5",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "6",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "7",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "8",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "9",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "4",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "5",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "6",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "7",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "8",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "9",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "4",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "5",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "6",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "7",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "8",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "9",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "4",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "5",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "6",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "7",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "8",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "9",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "4",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "5",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "6",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "7",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "8",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "9",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "4",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "5",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "6",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "7",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "8",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "9",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "4",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "5",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "6",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "7",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "8",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "9",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "4",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "5",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "6",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "7",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "8",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "9",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "4",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "5",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "6",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "7",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "8",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "9",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "4",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "5",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "6",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "7",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "8",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "9",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "4",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "5",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "6",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "7",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "8",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "9",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "4",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "5",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "6",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "7",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "8",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "9",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "4",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "5",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "6",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "7",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "8",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "9",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "4",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "5",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "6",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "7",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "8",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "9",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "4",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "5",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "6",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "7",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "8",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "9",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "4",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "5",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "6",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "7",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "8",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "9",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "4",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "5",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "6",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "7",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "8",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "9",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "4",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "5",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "6",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "7",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "8",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "9",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "4",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "5",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "6",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "7",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "8",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "9",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "4",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "5",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "6",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "7",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "8",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "9",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "4",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "5",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "6",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "7",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "8",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "9",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "4",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "5",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "6",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "7",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "8",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "9",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "4",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "5",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "6",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "7",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "8",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "9",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "4",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "5",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "6",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "7",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "8",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "9",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "4",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "5",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "6",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "7",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "8",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "9",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "4",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "5",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "6",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "7",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "8",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "9",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "4",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "5",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "6",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "7",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "8",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "9",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "4",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "5",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "6",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "7",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "8",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "9",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "4",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "5",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "6",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "7",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "8",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "9",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "4",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "5",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "6",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "7",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "8",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "9",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "4",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "5",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "6",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "7",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "8",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "9",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "4",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "5",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "6",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "7",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "8",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "9",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "4",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "5",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "6",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "7",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "8",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "9",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "4",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "5",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "6",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "7",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "8",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "9",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "4",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "5",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "6",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "7",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "8",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "9",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "4",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "5",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "6",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "7",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "8",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "9",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "4",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "5",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "6",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "7",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "8",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "9",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "4",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "5",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "6",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "7",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "8",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "9",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "4",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "5",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "6",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "7",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "8",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "9",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "4",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "5",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "6",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "7",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "8",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "9",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "4",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "5",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "6",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "7",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "8",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "9",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "4",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "5",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "6",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "7",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "8",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "9",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "4",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "5",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "6",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "7",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "8",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "9",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "4",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "5",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "6",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "7",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "8",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "9",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "4",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "5",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "6",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "7",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "8",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "9",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "4",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "5",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "6",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "7",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "8",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "9",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "4",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "5",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "6",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "7",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "8",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "9",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "4",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "5",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "6",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "7",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "8",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "9",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "4",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "5",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "6",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "7",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "8",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "9",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "4",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "5",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "6",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "7",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "8",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "9",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "4",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "5",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "6",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "7",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "8",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "9",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "4",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "5",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "6",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "7",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "8",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "9",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "4",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "5",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "6",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "7",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "8",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "9",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "4",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "5",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "6",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "7",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "8",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "9",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "4",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "5",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "6",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "7",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "8",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "9",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "4",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "5",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "6",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "7",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "8",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "9",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "4",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "5",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "6",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "7",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "8",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "9",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "4",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "5",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "6",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "7",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "8",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "9",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "4",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "5",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "6",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "7",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "8",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "9",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "4",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "5",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "6",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "7",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "8",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "9",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "4",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "5",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "6",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "7",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "8",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "9",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "4",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "5",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "6",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "7",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "8",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "9",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "4",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "5",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "6",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "7",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "8",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "9",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "4",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "5",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "6",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "7",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "8",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "9",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "4",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "5",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "6",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "7",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "8",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "9",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "4",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "5",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "6",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "7",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "8",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "9",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "4",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "5",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "6",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "7",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "8",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "9",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "4",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "5",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "6",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "7",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "8",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "9",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "4",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "5",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "6",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "7",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "8",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "9",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "4",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "5",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "6",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "7",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "8",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "9",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "4",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "5",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "6",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "7",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "8",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "9",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "4",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "5",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "6",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "7",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "8",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "9",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "4",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "5",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "6",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "7",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "8",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "9",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "4",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "5",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "6",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "7",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "8",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "9",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "4",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "5",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "6",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "7",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "8",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "9",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "4",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "5",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "6",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "7",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "8",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "9",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "4",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "5",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "6",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "7",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "8",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "9",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "4",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "5",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "6",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "7",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "8",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "9",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "4",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "5",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "6",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "7",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "8",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "9",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "4",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "5",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "6",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "7",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "8",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "9",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "4",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "5",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "6",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "7",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "8",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "9",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "4",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "5",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "6",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "7",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "8",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "9",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "4",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "5",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "6",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "7",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "8",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "9",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "4",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "5",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "6",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "7",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "8",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "9",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "4",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "5",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "6",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "7",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "8",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "9",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "4",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "5",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "6",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "7",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "8",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "9",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "4",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "5",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "6",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "7",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "8",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "9",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "4",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "5",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "6",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "7",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "8",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "9",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "4",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "5",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "6",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "7",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "8",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "9",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "4",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "5",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "6",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "7",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "8",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "9",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "4",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "5",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "6",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "7",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "8",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "9",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "4",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "5",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "6",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "7",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "8",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "9",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "4",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "5",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "6",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "7",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "8",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "9",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "4",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "5",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "6",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "7",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "8",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "9",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "4",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "5",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "6",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "7",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "8",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "9",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "4",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "5",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "6",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "7",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "8",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "9",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "4",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "5",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "6",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "7",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "8",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "9",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "4",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "5",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "6",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "7",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "8",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "9",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "4",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "5",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "6",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "7",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "8",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "9",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "4",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "5",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "6",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "7",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "8",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "9",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "4",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "5",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "6",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "7",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "8",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "9",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "4",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "5",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "6",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "7",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "8",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "9",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "4",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "5",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "6",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "7",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "8",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "9",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "4",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "5",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "6",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "7",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "8",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "9",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "4",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "5",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "6",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "7",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "8",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "9",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "4",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "5",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "6",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "7",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "8",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "9",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "4",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "5",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "6",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "7",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "8",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "9",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "4",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "5",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "6",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "7",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "8",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "9",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "4",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "5",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "6",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "7",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "8",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "9",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "4",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "5",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "6",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "7",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "8",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "9",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "4",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "5",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "6",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "7",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "8",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "9",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "4",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "5",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "6",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "7",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "8",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "9",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "4",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "5",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "6",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "7",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "8",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "9",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "4",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "5",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "6",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "7",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "8",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "9",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "4",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "5",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "6",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "7",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "8",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "9",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "4",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "5",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "6",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "7",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "8",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "9",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "4",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "5",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "6",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "7",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "8",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "9",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "4",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "5",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "6",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "7",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "8",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "9",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "4",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "5",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "6",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "7",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "8",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "9",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "4",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "5",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "6",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "7",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "8",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "9",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "4",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "5",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "6",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "7",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "8",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "9",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "4",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "5",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "6",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "7",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "8",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "9",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "4",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "5",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "6",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "7",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "8",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "9",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "4",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "5",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "6",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "7",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "8",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "9",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "4",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "5",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "6",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "7",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "8",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "9",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "4",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "5",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "6",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "7",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "8",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "9",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "4",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "5",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "6",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "7",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "8",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "9",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "4",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "5",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "6",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "7",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "8",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "9",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "4",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "5",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "6",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "7",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "8",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "9",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "4",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "5",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "6",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "7",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "8",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "9",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "4",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "5",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "6",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "7",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "8",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "9",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "4",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "5",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "6",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "7",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "8",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "9",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "4",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "5",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "6",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "7",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "8",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "9",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "4",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "5",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "6",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "7",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "8",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "9",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "4",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "5",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "6",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "7",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "8",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "9",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "4",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "5",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "6",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "7",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "8",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "9",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "4",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "5",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "6",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "7",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "8",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "9",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "4",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "5",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "6",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "7",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "8",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "9",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "4",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "5",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "6",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "7",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "8",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "9",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "4",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "5",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "6",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "7",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "8",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "9",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "4",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "5",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "6",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "7",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "8",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "9",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "4",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "5",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "6",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "7",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "8",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "9",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "4",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "5",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "6",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "7",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "8",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "9",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "4",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "5",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "6",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [{
        lifnr: "7",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "8",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "9",
        system: "EF",
        subsystem: "EF",
        pais: "Colombia"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
      {
        lifnr: "1",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      },
      {
        lifnr: "2",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    },
    Global: {
      system: "SYS",
      subsystem: "SUB",
      suppliers: [{
        lifnr: "3",
        system: "ES",
        subsystem: "ES",
        pais: "españa"
      }]
    }
  }
},
{
  infoSAPMulti: {
    DTS: {
      subsystem: "DTS",
      suppliers: [
