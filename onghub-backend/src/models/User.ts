import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
@Entity()
export class User {
  @PrimaryGeneratedColumn({ name: 'usuario_id' })
  usuarioId!: number;

  @Column({ name: 'nombre_usuario' })
  nombreUsuario!: string;

  @Column({ name: 'created_at' })
  createdAt?: Date;
}
