# MMM-SL-PublicTransport-Disturbances
[Magic Mirror](https://magicmirror.builders/) module - Display public transport disturbances in Stockholm/Sweden.

This is a companion module to the [MMM-SL-PublicTransport](https://github.com/boghammar/MMM-SL-PublicTransport) module. This module gets its information from that module so it can't work on it's own.

![SL PublicTransport Module](https://github.com/boghammar/MMM-SL-PublicTransport/blob/master/docs/MMM-SL-Screenshot.PNG)

## Install
1. Clone repository into ``../modules/`` inside your MagicMirror folder.
2. Run ``npm install`` inside ``../modules/MMM-SL-PublicTransport-Disturbances/`` folder
3. Add the module to the MagicMirror config

## Update
1. Run ``git pull`` inside ``../modules/MMM-SL-PublicTransport-Disturbances/`` folder.
2. Run ``npm install`` inside ``../modules/MMM-SL-PublicTransport-Disturbances/`` folder

## Configuration

```
modules: [
    ...
    {
        module: 'MMM-SL-PublicTransport-Disturbances',
        position: 'bottom_center',
        config: {
        }
    },
    ...
]
```
