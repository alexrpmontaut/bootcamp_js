import * as StyleBusiness from "./style-business";

const getClientAccountsElement = function(accounts) {
    const ul = document.createElement("ul");
    for (let account of accounts) {
        ul.append(getAccountElement(account));
    }
    return ul;
}

const getAccountElement = function(account) {
    const li = document.createElement("li");

    li.style = StyleBusiness.getNodeStyle(account);

    li.append("[Saldo: " + account.money + "] IBAN: " + account.iban);
    return li;
}

export {getClientAccountsElement, getAccountElement};