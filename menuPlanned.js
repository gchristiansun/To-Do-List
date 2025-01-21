import {planned} from './globalVariabel.js';
import chalk from 'chalk'
import {prompt} from './globalVariabel.js';
import {menuUtama} from './mainMenu.js';
import {displayPlanned} from './globalVariabel.js';

export function menuPlanned() {
    console.clear();
    while (true) {
        console.log("--------------Jadwal Anda-------------");
        if (planned.length !== 0) {
            displayPlanned()
        }
        else if (planned.length === 0) {
            console.log("")
            console.log(chalk.blue("=> Belum ada Jadwal"));
            console.log("")
            console.log("--------------------------------------");
        }
        console.log("[1] Tambahkan Jadwal");
        console.log("[2] Edit Jadwal");
        console.log("[3] Hapus Jadwal");
        console.log("[>] Kembali")

        let option = prompt("Pilih Menu: ");

        if (option == 1)  {
            console.clear();
            console.log("--------------Jadwal Anda-------------");
            if (planned.length != 0) {
                displayPlanned()
            }
            else if (planned.length == 0) {
                console.log("")
                console.log(chalk.blue("=> Belum ada Jadwal"));
                console.log("")
                console.log("--------------------------------------");
            }
            console.log("[>] Kembali")
            while (true) {
                var activity = prompt("Kegiatan: ");
                if (activity == ">") {
                    return menuPlanned()
                }
                else if (activity == "") {
                    console.log(chalk.red("=> Kegiatan tidak boleh kosong"));
                    prompt("Tekan Enter untuk melanjutkan")
                    console.clear()
                    console.log("--------------Jadwal Anda-------------");
                    if (planned.length != 0) {
                        displayPlanned()
                        console.log("[>] Kembali")
                    }
                    else if (planned.length == 0) {
                        console.log("")
                        console.log(chalk.blue("=> Belum ada Jadwal"));
                        console.log("")
                        console.log("--------------------------------------");
                        console.log("[>] Kembali")
                    }
                }
                else {
                    break   
                }
            }
            while (true) {
                var tanggal = prompt("Tanggal: ");
                if (tanggal == ">") {
                    return menuPlanned()
                }
                else if (tanggal == "") {
                    console.log(chalk.red("=> Tanggal tidak boleh kosong"));
                    prompt("Tekan Enter untuk melanjutkan")
                    console.clear()
                    console.log("--------------Jadwal Anda-------------");
                    if (planned.length != 0) {
                        displayPlanned()
                        console.log("[>] Kembali")
                        console.log(`Kegiatan: ${activity}`);
                    }
                    else if (planned.length == 0) {
                        console.log("")
                        console.log(chalk.blue("=> Belum ada Jadwal"));
                        console.log("")
                        console.log("--------------------------------------");
                        console.log("[>] Kembali")
                        console.log(`Kegiatan: ${activity}`);
                    }
                }
                else {
                    break
                }
            }
            while (true ) {
                var bulan = prompt("Bulan: ");
                if (bulan == ">") {
                    return menuPlanned()
                }
                else if (bulan == "") {
                    console.log(chalk.red("=> Tanggal tidak boleh kosong"));
                    prompt("Tekan Enter untuk melanjutkan")
                    console.clear()
                    console.log("--------------Jadwal Anda-------------");
                    if (planned.length != 0) {
                        displayPlanned()
                        console.log("[>] Kembali")
                        console.log(`Kegiatan: ${activity}`);
                        console.log(`Tanggal: ${tanggal}`);
                    }
                    else if (planned.length == 0) {
                        console.log("")
                        console.log(chalk.blue("=> Belum ada Jadwal"));
                        console.log("")
                        console.log("--------------------------------------");
                        console.log("[>] Kembali")
                        console.log(`Kegiatan: ${activity}`);
                        console.log(`Tanggal: ${tanggal}`);
                    }
                }
                else {
                    break
                }
            }
            while (true) {
                var tahun = prompt("Tahun: ");
                if (tahun == ">") {
                    return menuPlanned()
                }
                else if (tahun == "") {
                    console.log(chalk.red("=> Tahun tidak boleh kosong"));
                    prompt("Tekan Enter untuk melanjutkan")
                    console.clear()
                    console.log("--------------Jadwal Anda-------------");
                    if (planned.length != 0) {
                        displayPlanned()
                        console.log("[>] Kembali")
                        console.log(`Kegiatan: ${activity}`);
                        console.log(`Tanggal: ${tanggal}`);
                        console.log(`Bulan: ${bulan}`);
                    }
                    else if (planned.length == 0) {
                        console.log("")
                        console.log(chalk.blue("=> Belum ada Jadwal"));
                        console.log("")
                        console.log("--------------------------------------");
                        console.log("[>] Kembali")
                        console.log(`Kegiatan: ${activity}`);
                        console.log(`Tanggal: ${tanggal}`);
                        console.log(`Bulan: ${bulan}`);
                    }
                }
                else {
                    break
                }
            }
            while (true) {
                var jam = prompt("Jam: ");
                if (jam == ">") {
                    return menuPlanned()
                }
                else if (jam == "") {
                    console.log(chalk.red("=> Jam tidak boleh kosong"));
                    prompt("Tekan Enter untuk melanjutkan")
                    console.clear()
                    console.log("--------------Jadwal Anda-------------");
                        if (planned.length != 0) {
                            displayPlanned()
                            console.log("[>] Kembali")
                            console.log(`Kegiatan: ${activity}`);
                            console.log(`Tanggal: ${tanggal}`);
                            console.log(`Bulan: ${bulan}`);
                            console.log(`Tahun: ${tahun}`);
                        }
                        else if (planned.length == 0) {
                            console.log("")
                            console.log(chalk.blue("=> Belum ada Jadwal"));
                            console.log("")
                            console.log("--------------------------------------");
                            console.log("[>] Kembali")
                            console.log(`Kegiatan: ${activity}`);
                            console.log(`Tanggal: ${tanggal}`);
                            console.log(`Bulan: ${bulan}`);
                            console.log(`Tahun: ${tahun}`);
                        }
                }
                else {
                    break
                }
            }
            planned.splice(0, 0, [activity, tanggal, bulan, tahun, jam])
            // planned.push([activity, tanggal, bulan, tahun, jam])
            return menuPlanned()
        }
        else if (option == 2) {
            if (planned.length == 0) {
                console.log(chalk.red("Maaf tidak ada jadwal"));
                prompt("=> Tekan Enter untuk melanjutkan")
                console.clear();
            }
            else {
                console.clear();
                console.log("--------------Jadwal Anda-------------");
                displayPlanned()
                console.log("[>] Kembali")
                let id = prompt("Pilih ID: ")
                console.clear()
                let idDitemukan = false
                for (let i = 0; i < planned.length; i++) {
                    if (i == id - 1) {
                        console.clear();
                        console.log("--------------Jadwal Anda-------------");
                        displayPlanned()
                        console.log("[>] Kembali")
                        console.log("Edit: [1] Activity [2] Date [3] Time")
                        let edit = prompt("Edit jadwal: ")
                        if (edit == 1) {
                            while (true) {
                                console.clear()
                                console.log("--------------Jadwal Anda-------------");
                                displayPlanned()
                                console.log("[>] Kembali")
                                var activity = prompt("Kegiatan: ");
                                if (activity == ">") {
                                    return menuPlanned()
                                }
                                else if (activity == "") {
                                    console.log(chalk.red("=> Kegiatan tidak boleh kosong"));
                                    prompt("Tekan Enter untuk melanjutkan")
                                    console.clear()
                                    console.log("--------------Jadwal Anda-------------");
                                    if (planned.length != 0) {
                                        displayPlanned()
                                        console.log("[>] Kembali")
                                    }
                                    else if (planned.length == 0) {
                                        console.log("")
                                        console.log(chalk.blue("=> Belum ada Jadwal"));
                                        console.log("")
                                        console.log("--------------------------------------");
                                        console.log("[>] Kembali")
    
                                    }
                                }
                                else {
                                    planned[i].splice(0, 1, activity)
                                    break   
                                }
                            }
                        }
                        else if (edit == 2 ) {
                            console.clear()
                            console.log("--------------Jadwal Anda-------------");
                            displayPlanned()
                            console.log("[>] Kembali")
                            console.log("Edit: [1] Tanggal [2] Bulan [3] Tahun")
                            let editDate = prompt("Edit jadwal: ")
                            if (editDate == 1) {
                                console.clear()
                                console.log("--------------Jadwal Anda-------------");
                                displayPlanned()
                                console.log("[>] Kembali")
                                while (true) {
                                    var tanggal = prompt("Tanggal: ");
                                    if (tanggal == ">") {
                                        return menuPlanned()
                                    }
                                    else if (tanggal == "") {
                                        console.log(chalk.red("=> Tanggal tidak boleh kosong"));
                                        prompt("Tekan Enter untuk melanjutkan")
                                        console.clear()
                                        console.log("--------------Jadwal Anda-------------");
                                        if (planned.length != 0) {
                                            displayPlanned()
                                            console.log("[>] Kembali")
                                            console.log(`Kegiatan: ${activity}`);
                                        }
                                        else if (planned.length == 0) {
                                            console.log("")
                                            console.log(chalk.blue("=> Belum ada Jadwal"));
                                            console.log("")
                                            console.log("--------------------------------------");
                                            console.log("[>] Kembali")
                                            console.log(`Kegiatan: ${activity}`);
                                        }
                                    }
                                    else {
                                        planned[i].splice(1, 1, tanggal)
                                        break
                                    }
                                }
                            }
                            else if (editDate == 2) {
                                while (true ) {
                                    console.clear()
                                    console.log("--------------Jadwal Anda-------------");
                                    displayPlanned()
                                    console.log("[>] Kembali")
                                    var bulan = prompt("Bulan: ");
                                    if (bulan == ">") {
                                        return menuPlanned()
                                    }
                                    else if (bulan == "") {
                                        console.log(chalk.red("=> Tanggal tidak boleh kosong"));
                                        prompt("Tekan Enter untuk melanjutkan")
                                        console.clear()
                                        console.log("--------------Jadwal Anda-------------");
                                        if (planned.length != 0) {
                                            displayPlanned()
                                            console.log("[>] Kembali")
                                            console.log(`Kegiatan: ${activity}`);
                                            console.log(`Tanggal: ${tanggal}`);
                                        }
                                        else if (planned.length == 0) {
                                            console.log("")
                                            console.log(chalk.blue("=> Belum ada Jadwal"));
                                            console.log("")
                                            console.log("--------------------------------------");
                                            console.log("[>] Kembali")
                                            console.log(`Kegiatan: ${activity}`);
                                            console.log(`Tanggal: ${tanggal}`);
                                        }
                                    }
                                    else {
                                        planned[i].splice(2, 1, bulan)
                                        break
                                    }
                                }
                            }
                            else if (editDate == 3) {
                                while (true) {
                                    console.clear()
                                    console.log("--------------Jadwal Anda-------------");
                                    displayPlanned()
                                    console.log("[>] Kembali")
                                    var tahun = prompt("Tahun: ");
                                    if (tahun == ">") {
                                        return menuPlanned()
                                    }
                                    else if (tahun == "") {
                                        console.log(chalk.red("=> Tahun tidak boleh kosong"));
                                        prompt("Tekan Enter untuk melanjutkan")
                                        console.clear()
                                        console.log("--------------Jadwal Anda-------------");
                                        if (planned.length != 0) {
                                            displayPlanned()
                                            console.log("[>] Kembali")
                                            console.log(`Kegiatan: ${activity}`);
                                            console.log(`Tanggal: ${tanggal}`);
                                            console.log(`Bulan: ${bulan}`);
                                        }
                                        else if (planned.length == 0) {
                                            console.log("")
                                            console.log(chalk.blue("=> Belum ada Jadwal"));
                                            console.log("")
                                            console.log("--------------------------------------");
                                            console.log("[>] Kembali")
                                            console.log(`Kegiatan: ${activity}`);
                                            console.log(`Tanggal: ${tanggal}`);
                                            console.log(`Bulan: ${bulan}`);
                                        }
                                    }
                                    else {
                                        planned[i].splice(3, 1, tahun)
                                        break
                                    }
                                }
                            }
                            else if (editDate == ">") {
                                return menuPlanned()
                            }
                            else {
                                console.log(chalk.red("Inputan tidak valid"));
                                prompt("=> Tekan Enter untuk melanjutkan")
                                console.clear();
                            }
                        }
                        else if (edit == 3) {
                            while (true) {
                                console.clear()
                                console.log("--------------Jadwal Anda-------------");
                                displayPlanned()
                                console.log("[>] Kembali")
                                var jam = prompt("Jam: ");
                                if (jam == ">") {
                                    return menuPlanned()
                                }
                                else if (jam == "") {
                                    console.log(chalk.red("=> Jam tidak boleh kosong"));
                                    prompt("Tekan Enter untuk melanjutkan")
                                    console.clear()
                                    console.log("--------------Jadwal Anda-------------");
                                        if (planned.length != 0) {
                                        displayPlanned()
                                            console.log("[>] Kembali")
                                            console.log(`Kegiatan: ${activity}`);
                                            console.log(`Tanggal: ${tanggal}`);
                                            console.log(`Bulan: ${bulan}`);
                                            console.log(`Tahun: ${tahun}`);
                                        }
                                        else if (planned.length == 0) {
                                            console.log("")
                                            console.log(chalk.blue("=> Belum ada Jadwal"));
                                            console.log("")
                                            console.log("--------------------------------------");
                                            console.log("[>] Kembali")
                                            console.log(`Kegiatan: ${activity}`);   
                                            console.log(`Tanggal: ${tanggal}`);
                                            console.log(`Bulan: ${bulan}`);
                                            console.log(`Tahun: ${tahun}`);
                                        }
                                }
                                else {
                                        planned[i].splice(4, 1, jam)
                                        break
                                }
                            }
                        }
                        else {
                            console.log(chalk.red("Inputan tidak valid"));
                            console.log9=("Tekan Enter untuk melanjutkan")
                            console.clear()
                        }
                        idDitemukan = true
                        // planned.splice(i, 1, [activity, tanggal, bulan, tahun, jam])
                        console.clear()

                    }
                }
                if (id == ">") {
                    return menuPlanned()
                }
                else if (idDitemukan == false) {
                    console.log("--------------Jadwal Anda-------------");
                    displayPlanned()
                    console.log("[>] Kembali")
                    console.log(chalk.red("=> ID tidak valid"));
                    prompt("Tekan Enter untuk melanjutkan")
                    console.clear()
                    return menuPlanned()
                }
            }
        }
        else if (option == 3) {
            if (planned.length == 0) {
                console.log(chalk.red("Maaf tidak ada jadwal"));
                prompt("=> Tekan Enter untuk melanjutkan")
                console.clear();
            }
            else {
                console.clear();
                console.log("--------------Jadwal Anda-------------");
                displayPlanned()
                console.log("[>] Kembali")
                let id = prompt("Pilih ID: ")
                let idIsFind = false
                for (let j = 0; j < planned.length; j++) {
                    if (id - 1 == j) {
                        planned.splice(j, 1)
                        idIsFind = true
                        console.clear()
                        break
                    }
                }

                if (id == ">") {
                    return menuPlanned()
                }
                else if (idIsFind == false) {
                    console.log(chalk.red("=> ID tidak valid"));
                    prompt("Tekan Enter untuk melanjutkan")
                    console.clear()
                    return menuPlanned()
                }
            }
        }
        else if (option == ">") {
            return menuUtama()
        }
        else {
            console.log(chalk.red("=> Inputan tidak valid"));
            prompt("Tekan Enter untuk melanjutkan")
            console.clear()
        }
    }
}

