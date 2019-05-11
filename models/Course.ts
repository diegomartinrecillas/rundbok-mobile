export class Course {
	public id: number;
	public name: string;
	public programmeId: number;
	public createdAt: string;
	public code: string;
	public updatedAt: string;

	constructor(data: any) {
		if (!data) return;
		this.id = data['id'];
		this.name = data['name'];
		this.programmeId = data['programme_id'];
		this.createdAt = data['created_at'];
		this.updatedAt = data['updated_at'];
		this.code = data['code'];
	}
}
