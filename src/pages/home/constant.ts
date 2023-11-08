export const node: any = [
    {
      id: "start",
      position: { x: 1, y: 1 },
      data: {
        label: "Start",
        description: "The starting point of the IVR journey",
        pct: "79.53",
        number: "14,533",
        rank:1,
        isActive: true,
        isConnectableLeft: false,
      }
    },
    {
      id: "welcome-message",
      position: { x: 2, y: 1 },
      data: {
        label: "Welcome Message",
        description: "Play a welcome message to the caller",
        pct: "87.36",
        number: "26,235",
        rank:5,
        isActive: false
      }
    },
    {
      id: "menu-options",
      position: { x: 3, y: 1 },
      data: {
        label: "Menu Options",
        description: "Present menu options to the caller",
        pct: "56.9",
        number: "10,235",
        rank:4,
        isActive: true
      }
    },
    {
      id: "option-1",
      position: { x: 4, y: 1 },
      data: {
        label: "Option 1",
        description: "Handle caller's selection for Option 1",
        pct: "45.39",
        number: "4512",
        rank:3,
        isActive: true
      }
    },
    {
      id: "option-2",
      position: { x: 5, y: 1 },
      data: {
        label: "Option 2",
        description: "Handle caller's selection for Option 2",
        pct: "56.38",
        number: "4568",
        rank:2,
        isActive: false
      }
    },
    {
      id: "end",
      position: { x: 6, y: 1 },
      data: {
        label: "End",
        description: "End of the IVR journey",
        pct: "56.53",
        number: "5,456",
        rank:7,
        isActive: true,
        isConnectableRight: false,
      }
    }
   
  ]

  export const edge: any = [
    {
      id: "edge-1",
      source: 'start',
      target: 'welcome-message',
      // label: 'route-12',
      data: {
        weight: 0.1,
      }
    },
    {
      id: "edge-2",
      source: 'welcome-message',
      target: 'menu-options',
      // label: 'route-13',
      data: {
        weight: 0.2,
      }
    },
    {
      id: "edge-3",
      source: 'menu-options',
      target: 'option-1',
      // label: 'route-14',
      data: {
        weight: 0.7,
      }
    },
    {
      id: "edge-4",
      source: 'menu-options',
      target: 'option-2',
      // label: 'route-25',
      data: {
        weight: 0.4,
      }
    },
    {
      id: "edge-5",
      source: 'option-1',
      target: 'end',
      // label: 'route-35',
      data: {
        weight: 0.7,
      }
    },
    {
      id: "edge-6",
      source: 'option-2',
      target: 'end',
      // label: 'route-45',
      data: {
        weight: 1.5,
      }
    }
  ]

  export const node1: any = [
    {
      id: "start",
      position: { x: 5, y: 7 },
      data: {
        label: "Start",
        description: "The starting point",
        pct: "90",
        number: "12",
        rank:1,
        isActive: true,
        isConnectableLeft: false,
      }
    },
    {
      id: "option-1",
      position: { x: 7, y: 6.5 },
      data: {
        label: "Option 1",
        description: "The first option",
        pct: "87.36",
        number: "26,235",
        rank:5,
        isActive: false
      }
    },
    {
      id: "option-2",
      position: { x: 7, y: 7.5 },
      data: {
        label: "Option 2",
        description: "The second option",
        pct: "56.9",
        number: "10,235",
        rank:4,
        isActive: true
      }
    },
    {
        id: "menu-options",
        position: { x: 6, y: 7 },
        data: {
          label: "Menu Options",
          description: "Main menu options",
          pct: "45.39",
          number: "4512",
          rank:2,
          isActive: true
        }
      },
    {
      id: "option-3",
      position: { x: 8, y: 7 },
      data: {
        label: "Option 3",
        description: "The third option",
        pct: "45.39",
        number: "4512",
        rank:3,
        isActive: true
      }
    },
    {
      id: "end",
      position: { x: 9, y: 7 },
      data: {
        label: "End",
        description: "The end point",
        pct: "56.53",
        number: "5,456",
        rank:7,
        isActive: true,
        isConnectableRight: false,
      }
    }
   
  ]

  export const edge1: any = [
    {
      id: "edge-1",
      source: 'start',
      target: 'menu-options',
      // label: 'route-12',
      data: {
        weight: 0.1,
      }
    },
    {
      id: "edge-2",
      source: 'menu-options',
      target: 'option-1',
      // label: 'route-13',
      data: {
        weight: 0.2,
      }
    },
    {
      id: "edge-3",
      source: 'menu-options',
      target: 'option-2',
      // label: 'route-14',
      data: {
        weight: 0.7,
      }
    },
    {
      id: "edge-4",
      source: 'option-1',
      target: 'option-3',
      // label: 'route-25',
      data: {
        weight: 0.4,
      }
    },
    {
      id: "edge-5",
      source: 'option-3',
      target: 'end',
      // label: 'route-35',
      data: {
        weight: 0.7,
      }
    },
    {
      id: "edge-6",
      source: 'option-2',
      target: 'end',
      // label: 'route-45',
      data: {
        weight: 1.5,
      }
    }
  ]
