public with sharing class AccountController {
  @AuraEnabled(cacheable=true)
  public static List<Account> getAccountById(Id accId) {
    return [SELECT Id, Name, Phome FROM Account WHERE Id = :accId];
  }

  @AuraEnabled(cacheable=true)
  public static List<Account> getAccountList() {
    return [
      SELECT Id, Name, AnnualRevenue
      FROM Account
      WHERE AnnualRevenue != NULL
      LIMIT 5
    ];
  }

  @AuraEnabled(cacheable=true)
  public static List<Contact> getContactList() {
    return [SELECT Id, Name FROM Contact];
  }
}
