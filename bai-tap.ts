const tuoi: number = 65; {
    if (tuoi < 18) {console.log(`Trẻ em`);}
    else if (tuoi < 60) {console.log(`Người lớn`);}
    else {console.log(`Người cao tuổi`);}
}

//===
const dayso: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (const d of dayso) {
    console.log (`5 x ${d} = ${5 * d}`)
}

//===

const chuoiso: number[] = [3, 7, -2, 0, 12, -8, 5];
for (const c of chuoiso) {
    if (c > 0) {console.log(`${c} là số dương`);}
    else if (c < 0) {console.log(`${c} là số âm`);}
    else {console.log(`${c} là số 0`);}
}

//===

function isValid(amount: number): boolean {
    if (amount > 0) {return true;}
    else {return false;}
}

const amounts: number[] = [100000, 0, -50000, 200000, -1];
for (const a of amounts) {
    if (isValid(a)) {console.log(`${a} là số hợp lệ`);}
    else {console.log(`${a} là số không hợp lệ`);}
}