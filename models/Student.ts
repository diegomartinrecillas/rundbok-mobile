export class Student {
	public avatar: string;
	public email: string;
	public facebookProfile: string;
	public firstName: string;
	public fullName: string;
	public id: number;
	public lastName: string;
	public location: string;

	constructor(data: any) {
		if (!data) return;
		this.avatar = data['avatar'];
		this.email = data['email'];
		this.facebookProfile = data['facebook_profile'];
		this.firstName = data['first_name'];
		this.fullName = data['full_name'];
		this.id = data['id'];
		this.lastName = data['last_name'];
		this.location = data['location'];
	}
}
