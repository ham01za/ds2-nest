import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

// Enum pour le statut de l'appareil
export enum DeviceStatus {
    PENDING = 'PENDING',
    REPAIRING = 'REPAIRING',
    READY = 'READY',
}

// Enum pour l'état (grade)
export enum DeviceGrade {
    A = 'A',
    B = 'B',
    C = 'C',
    NONE = 'NONE',
}

@Entity()
export class Device {

  // Identifiant unique
  @PrimaryGeneratedColumn()
  id: number;

  // Numéro de série
  @Column()
  serialNumber: string;

  // Marque (Apple, Samsung, etc.)
  @Column()
  brand: string;

  // Modèle (iPhone 11, S23, etc.)
  @Column()
  model: string;

  // Statut de réparation
  @Column({
    type: 'enum',
    enum: DeviceStatus,
    default: DeviceStatus.PENDING,
  })
  status: DeviceStatus;

  // État de l'appareil après réparation
  @Column({
    type: 'enum',
    enum: DeviceGrade,
    default: DeviceGrade.NONE,
  })
  grade: DeviceGrade;
}
