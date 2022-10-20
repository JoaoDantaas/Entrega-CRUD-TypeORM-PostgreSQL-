import { MigrationInterface, QueryRunner } from "typeorm";

export class AttUser1666297614025 implements MigrationInterface {
    name = 'AttUser1666297614025'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" RENAME COLUMN "updateAt" TO "updatedAt"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" RENAME COLUMN "updatedAt" TO "updateAt"`);
    }

}
