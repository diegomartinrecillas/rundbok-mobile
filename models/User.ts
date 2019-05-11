export class User {
	public avatar: string;
	public email: string;
	public firstName: string;
	public fullName: string;
	public lastName: string;
	public location: string;
	public rundbokToken: string;

	constructor(data: any) {
		if (!data) return;
		this.avatar = data['avatar'];
		this.email = data['email'];
		this.firstName = data['first_name'];
		this.fullName = data['full_name'];
		this.lastName = data['last_name'];
		this.location = data['location'];
		this.rundbokToken = data['rundbok_token'];
	}
}
