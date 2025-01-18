import {planned} from './globalVariabel.js';
import {banner} from './globalVariabel.js';
import chalk from 'chalk'
import {prompt} from './globalVariabel.js';
import {menuUtama} from './mainMenu.js';

export function menuPlanned() {
    console.clear();
    while (true) {
        console.log("Jadwal Anda Hari ini");
        console.log("--------------------------------------");
        console.log(chalk.blue("Kegiatan - Tanggal/Bulan/Tahun - Jam"));
        if (planned.length !== 0) {
            for (let i = 0; i < planned.length; i++) {
                console.log(`${i + 1}. ${planned[i][0]} - ${planned[i][1]}/${planned[i][2]}/${planned[i][3]} - ${planned[i][4]}`);
            }
            console.log("--------------------------------------");
        }
        else if (planned.length === 0) {
            console.log("")
            console.log(chalk.blue("=> Belum ada Jadwal"));
            console.log("")
        }
        console.log("--------------------------------------");
        console.log("[1] Tambahkan Jadwal");
        console.log("[2] Edit Jadwal");
        console.log("[3] Hapus Jadwal");
        console.log("[>] Kembali")

        let option = prompt("Pilih Menu: ");

        if (option == 1)  {
            console.clear();
            console.log("Jadwal Anda Hari ini");
            console.log("--------------------------------------");
            console.log(chalk.blue("Kegiatan - Tanggal/Bulan/Tahun - Jam"));
            if (planned.length != 0) {
                for (let i = 0; i < planned.length; i++) {
                    console.log(`${i + 1}. ${planned[i][0]} - ${planned[i][1]}/${planned[i][2]}/${planned[i][3]} - ${planned[i][4]}`);
                }
                console.log("--------------------------------------");
            }
            else if (planned.length == 0) {
                console.log("")
                console.log(chalk.blue("=> Belum ada Jadwal"));
                console.log("")
                console.log("--------------------------------------");
            }

            let activity = prompt("Kegiatan: ");
            if (activity == ">") {
                return menuPlanned()
            }
            let tanggal = prompt("Tanggal: ");
            if (tanggal == ">") {
                return menuPlanned()
            }
            let bulan = prompt("Bulan: ");
            if (bulan == ">") {
                return menuPlanned()
            }
            let tahun = prompt("Tahun: ");
            if (tahun == ">") {
                return menuPlanned()
            }
            let jam = prompt("Jam: ");
            if (jam == ">") {
                return menuPlanned()
            }

            planned.splice(0, 0, [activity, tanggal, bulan, tahun, jam])
            return menuPlanned()
        }
        else if (option == 2) {
            console.clear();
            console.log("Jadwal Anda Hari ini");
            console.log("--------------------------------------");
            console.log(chalk.blue("Kegiatan - Tanggal/Bulan/Tahun - Jam"));
            if (planned.length != 0) {
                for (let i = 0; i < planned.length; i++) {
                    console.log(`${i + 1}. ${planned[i][0]} - ${planned[i][1]}/${planned[i][2]}/${planned[i][3]} - ${planned[i][4]}`);
                }
                console.log("--------------------------------------");
            }
            else if (planned.length == 0) {
                console.log("")
                console.log(chalk.blue("=> Belum ada Jadwal"));
                console.log("")
                console.log("--------------------------------------");
            }
        }
        else if (option == ">") {
            return menuUtama()
        }
    }
}

