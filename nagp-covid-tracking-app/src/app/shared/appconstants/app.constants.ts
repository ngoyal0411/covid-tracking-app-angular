export class AppConstants {
    public static get appTitle(): string { return "Covid Tracking App"; }
    public static get authToken(): string { return "authtokenadmin";}
    public static get requiredFieldErrorMessage(): string { return "This field can't be empty"; }
    public static get toastWarningMessage(): string { return "Please enter valid credentials!"; }
    public static get districtWiseJsonUrl(): string { return "https://api.covid19india.org/state_district_wise.json"; }
    public static get stateWiseJsonUrl(): string { return "https://api.covid19india.org/data.json"; }
    public static get newsApiURL(): string { return "api/news";}
  
}
