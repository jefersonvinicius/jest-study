import { sum } from '@app/math';
import User from '@app/database/models/User';
import axios from 'axios';
import { createConnection, getConnection } from 'typeorm';

describe('Testing math functions', () => {
    it('should sum 2 + 2 equals 4', () => {
        expect(sum(2, 2)).toBe(4);
    });
});

describe('Testing express serve', () => {
    it('should connect express serve', async () => {
        const { data } = await axios.get('http://localhost:3000');
        expect(data).toEqual({ message: 'serve working' });
    });
});

describe('Testing database models', () => {
    beforeAll(async () => {
        // Função executada antes de executar todos os testes
        await createConnection();
    });
    it('should able create user', async () => {
        const user = new User();
        user.name = 'Jeferson';
        user.email = 'jeferson.viniciuscrc@gmail.com';
        user.password = '123';
        const userSaved = await user.save();

        expect(userSaved.id).toBeDefined();
    });
    it('should able find one user with email', async () => {
        const targetEmail = 'jeferson.viniciuscrc@gmail.com';
        const user = await User.findOne({ where: { email: targetEmail } });
        expect(user?.email).toBe(targetEmail);
    });
    afterAll(() => {
        getConnection().dropDatabase();
    });
});
