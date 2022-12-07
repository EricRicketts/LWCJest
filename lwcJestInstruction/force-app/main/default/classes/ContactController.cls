public with sharing class ContactController {
  @AuraEnabled(cacheable=true)
  public ContactController() {
  }

  public static List<Contact> getContactList() {
    return [SELECT NAME FROM Contact];
  }
}
