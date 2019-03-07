/*
Zde se vyplnují položky menu

Je potřeba vytvořit záznam v dané skupině pro všechny stránky v pořadím v jakém je chceme mít
 */
const menu = {
    '/': [
        {
            title: 'Příručka hráče',
            collapsable: true,
            children: [
                '/prirucka-hrace/predmluva',
                '/prirucka-hrace/uvod',
                '/prirucka-hrace/1-kapitola',
                '/prirucka-hrace/2-kapitola',
                '/prirucka-hrace/3-kapitola',
                '/prirucka-hrace/4-kapitola',
                '/prirucka-hrace/5-kapitola',
                '/prirucka-hrace/6-kapitola',
                '/prirucka-hrace/7-kapitola',
                '/prirucka-hrace/8-kapitola',
                '/prirucka-hrace/9-kapitola',
                '/prirucka-hrace/10-kapitola',
                '/prirucka-hrace/11-kapitola',
                '/prirucka-hrace/dodatek-a',
                '/prirucka-hrace/dodatek-b',
                '/prirucka-hrace/dodatek-c',
                '/prirucka-hrace/dodatek-d',
                '/prirucka-hrace/dodatek-e',
            ]
        },{
            title: 'Průvodce pána jeskyně',
            collapsable: true,
            children: [
                '/pruvodce-pana-jeskyne/uvod',
                '/pruvodce-pana-jeskyne/1-kapitola',
                '/pruvodce-pana-jeskyne/2-kapitola',
                '/pruvodce-pana-jeskyne/3-kapitola',
                '/pruvodce-pana-jeskyne/4-kapitola',
                '/pruvodce-pana-jeskyne/5-kapitola',
                '/pruvodce-pana-jeskyne/6-kapitola',
                '/pruvodce-pana-jeskyne/7-kapitola',
                '/pruvodce-pana-jeskyne/8-kapitola',
                '/pruvodce-pana-jeskyne/9-kapitola',
                '/pruvodce-pana-jeskyne/dodatek-A',
                '/pruvodce-pana-jeskyne/dodatek-B',
                '/pruvodce-pana-jeskyne/dodatek-C',
                '/pruvodce-pana-jeskyne/dodatek-D',
            ]
        },{
            title: 'Grimoar',
            collapsable: true,
            children: [
                '/grimoar/grimoar-jmen',
                '/grimoar/grimoar-moci',
            ]
        },
    ]
};


module.exports = menu;