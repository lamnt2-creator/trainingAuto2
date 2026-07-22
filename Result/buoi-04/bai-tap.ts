type CardData = {
  cardNumber: string;
  cardHolder: string;
  expiryDate: string;
  cvv: string;
  bankCode: string;
  cardType: 'credit' | 'debit' | 'atm';
};

const creditCard: CardData = {
    cardNumber: "4111-****-****-1234",
    cardHolder: "Tester 1",
    expiryDate: "2027",
    cvv: "123",
    bankCode: "VCB",
    cardType: "credit"
}

const debitCard: CardData = {
    cardNumber: "5111-****-****-5678",
    cardHolder: "Tester 2",
    expiryDate: "2029",
    cvv: "456",
    bankCode: "TCB",
    cardType: "debit"
}

const atmCard: CardData = {
    cardNumber: "6111-****-****-9012",
    cardHolder: "Tester 3",
    expiryDate: "2023",
    cvv: "789",
    bankCode: "ACB",
    cardType: "atm"
}

///===

const cardList: CardData[] = [creditCard, debitCard, atmCard];
let count = 1
for (const card of cardList) {
    console.log(`💳 ${count}. ${card.cardNumber} | ${card.bankCode} | ${card.cardType}`);
    count = count + 1
}
console.log(`📊 Tổng: ${count - 1} thẻ`);

///===

function validateCard(card: CardData): string {
    if (card.expiryDate >= "2027") {console.log(`✅ Thẻ ${card.cardType} ${card.bankCode} còn hạn `);
    } else {console.log(`❌ Thẻ ${card.cardType} ${card.bankCode} đã hết hạn `);
    }
    return card.cardType;
}

for (const card of cardList) {
    validateCard(card);
}