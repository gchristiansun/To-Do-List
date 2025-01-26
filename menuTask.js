import {banner} from './globalVariabel.js';
import {dataUser} from './globalVariabel.js';
import {indexUserCurrent} from './menuLogin.js';
import {displayTask} from './globalVariabel.js';
import {prompt} from './globalVariabel.js';
import {menuUtama} from './mainMenu.js';
import chalk from 'chalk'

banner();

export function menuTask() {
    console.clear();
    while (true) {
        console.log("--------------Tugas Anda-------------");
        if (dataUser[indexUserCurrent].task.length !== 0) {
            displayTask();
        }
        else if (dataUser[indexUserCurrent].task.length === 0) {
            console.log("\n");
            console.log(chalk.blue("=> Belum ada Tugas"));
            console.log("\n");
            console.log("--------------------------------------");
        }

        console.log("[>] Kembali");
        console.log("[1] Tambah Tugas");
        console.log("[2] Edit Tugas");
        console.log("[3] Hapus Tugas");
        console.log("[4] Tandai Selesai");
        
        let choice = prompt("Pilih Menu: ");
        if (choice == 1) {
            console.clear()
            console.log("--------------Tugas Anda-------------");
            if (dataUser[indexUserCurrent].task.length !== 0) {
                displayTask();
            }
            else if (dataUser[indexUserCurrent].task.length === 0) {
                console.log("\n");
                console.log(chalk.blue("=> Belum ada Tugas"));
                console.log("\n");
                console.log("--------------------------------------");
            }
            console.log("[>] Kembali")
            while (true) {
                var tugas = prompt("Tugas: ")
                if (tugas == ">") {
                    menuTask();
                } else if (tugas == "") {
                    console.log(chalk.red("=> Tugas tidak boleh kosong"));
                    prompt("Tekan Enter untuk melanjutkan");
                    console.clear();
                    console.log("--------------Tugas Anda-------------");
                    if (dataUser[indexUserCurrent].task.length !== 0) {
                        displayTask();
                        console.log("[>] Kembali")
                    }
                    else if (dataUser[indexUserCurrent].task.length === 0) {
                        console.log("\n");
                        console.log(chalk.blue("=> Belum ada Tugas"));
                        console.log("\n");
                        console.log("--------------------------------------");
                        console.log("[>] Kembali")
                    }
                } else {
                    break;
                }
            }
            while (true) {
                var tanggal = prompt("Tanggal: ")
                if (tanggal == ">") {
                    menuTask();
                } else if (tanggal == "") {
                    console.log(chalk.red("=> Tanggal tidak boleh kosong"))
                    prompt("Tekan Enter untuk melanjutkan");
                    console.clear();
                    console.log("--------------Tugas Anda-------------");
                    if (dataUser[indexUserCurrent].task.length !== 0) {
                        displayTask();
                        console.log("[>] Kembali");
                        console.log(`Tugas: ${tugas}`);
                    }
                    else if (dataUser[indexUserCurrent].task.length === 0) {
                        console.log("\n");
                        console.log(chalk.blue("=> Belum ada Tugas"));
                        console.log("\n");
                        console.log("--------------------------------------");
                        console.log("[>] Kembali")
                        console.log(`Tugas: ${tugas}`);
                    }
                } else {
                    break;
                }
            }
            while (true) {
                var bulan = prompt("Bulan: ")
                if (bulan == ">") {
                    menuTask();
                } else if (bulan == "") {
                    console.log(chalk.red("=> Bulan tidak boleh kosong"))
                    prompt("Tekan Enter untuk melanjutkan");
                    console.clear();
                    console.log("--------------Tugas Anda-------------");
                    if (dataUser[indexUserCurrent].task.length !== 0) {
                        displayTask();
                        console.log("[>] Kembali");
                        console.log(`Tugas: ${tugas}`);
                        console.log(`Tanggal: ${tanggal}`)
                    }
                    else if (dataUser[indexUserCurrent].task.length === 0) {
                        console.log("\n");
                        console.log(chalk.blue("=> Belum ada Tugas"));
                        console.log("\n");
                        console.log("--------------------------------------");
                        console.log("[>] Kembali")
                        console.log(`Tugas: ${tugas}`);
                        console.log(`Tanggal: ${tanggal}`)
                    }
                } else {
                    break;
                }
            }
            while (true) {
                var tahun = prompt("Tahun: ")
                if (tahun == ">") {
                    menuTask();
                } else if (tahun == "") {
                    console.log(chalk.red("=> Tahun tidak boleh kosong"))
                    prompt("Tekan Enter untuk melajutkan");
                    console.clear();
                    console.log("--------------Tugas Anda-------------");
                    if (dataUser[indexUserCurrent].task.length !== 0) {
                        displayTask();
                        console.log("[>] Kembali");
                        console.log(`Tugas: ${tugas}`);
                        console.log(`Tanggal: ${tanggal}`)
                        console.log(`Bulan: ${bulan}`)
                    }
                    else if (dataUser[indexUserCurrent].task.length === 0) {
                        console.log("\n");
                        console.log(chalk.blue("=> Belum ada Tugas"));
                        console.log("\n");
                        console.log("--------------------------------------");
                        console.log("[>] Kembali")
                        console.log(`Tugas: ${tugas}`);
                        console.log(`Tanggal: ${tanggal}`)
                        console.log(`Bulan: ${bulan}`)
                    }
                } else {
                    break;
                }
            }
            while (true) {
                var jam = prompt("Jam: ")
                if (jam == ">") {
                    menuTask();
                } else if (jam == "") {
                    console.log(chalk.red("=> Jam tidak boleh kosong"))
                    prompt("Tekan Enter untuk melanjutkan")
                    console.clear();
                    console.log("--------------Tugas Anda-------------");
                    if (dataUser[indexUserCurrent].task.length !== 0) {
                        displayTask();
                        console.log("[>] Kembali");
                        console.log(`Tugas: ${tugas}`);
                        console.log(`Tanggal: ${tanggal}`)
                        console.log(`Bulan: ${bulan}`)
                        console.log(`Tahun: ${tahun}`)
                    }
                    else if (dataUser[indexUserCurrent].task.length === 0) {
                        console.log("\n");
                        console.log(chalk.blue("=> Belum ada Tugas"));
                        console.log("\n");
                        console.log("--------------------------------------");
                        console.log("[>] Kembali")
                        console.log(`Tugas: ${tugas}`);
                        console.log(`Tanggal: ${tanggal}`)
                        console.log(`Bulan: ${bulan}`)
                        console.log(`Tahun: ${tahun}`)
                    }
                } else {
                    break;
                }
            }
            var state = " "
            dataUser[indexUserCurrent].task.splice(0, 0 , [tugas, tanggal, bulan, tahun, jam, state])
            return menuTask();
        }
        else if (choice == 2) {

        }
        else if (choice == 3) {
            if (dataUser[indexUserCurrent].task.length == 0) {
                console.log(chalk.red("Maaf tidak ada jadwal"));
                prompt("=> Tekan Enter untuk melanjutkan")
                console.clear();
            }
            else {
                console.clear();
                console.log("--------------Tugas Anda-------------");
                displayTask()
                console.log("[>] Kembali")
                let id = prompt("Pilih ID: ")
                let idIsFind = false
                for (let j = 0; j < dataUser[indexUserCurrent].task.length; j++) {
                    if (id - 1 == j) {
                        dataUser[indexUserCurrent].task.splice(j, 1)
                        idIsFind = true
                        console.clear()
                        break
                    }
                }

                if (id == ">") {
                    return menuTask()
                }
                else if (idIsFind == false) {
                    console.log(chalk.red("=> ID tidak valid"));
                    prompt("Tekan Enter untuk melanjutkan")
                    console.clear()
                    return menuTask()
                }
            }
        }
        else if (choice == 4) {
            console.clear();
            console.log("--------------Tugas Anda-------------");
            displayTask()
            console.log("[>] Kembali")
            let id = prompt("Pilih ID: ")
            let idIsFind = false
            for (let j = 0; j < dataUser[indexUserCurrent].task.length; j++) {
                if (id - 1 == j) {
                    dataUser[indexUserCurrent].task[j].splice(5, 1, "Selesai")
                    idIsFind = true
                    console.clear()
                    break;
                }
            }

            if (id == ">") {
                return menuTask()
            }
            else if (idIsFind == false) {
                console.log(chalk.red("=> ID tidak valid"));
                prompt("Tekan Enter untuk melanjutkan")
                console.clear()
                return menuTask()
            }
        }
        else if (choice == ">") {
            return menuUtama();
        }
        else {
            console.log(chalk.red("=> Inputan tidak valid"));
            prompt("Tekan Enter untuk melanjutkan");
            console.clear();
            menuTask();
        }

    }

}
