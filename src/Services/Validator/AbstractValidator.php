<?php

namespace App\Services\Validator;

use App\Model\ModelInterface;
use Exception;
use Symfony\Component\Validator\ConstraintViolation;
use Symfony\Component\Validator\Validator\ValidatorInterface;

abstract class AbstractValidator
{
    private $validator;

    public function __construct(ValidatorInterface $validator)
    {
        $this->validator = $validator;
    }

    public function validate(ModelInterface $model)
    {

    }

    protected function throwError(ModelInterface $model, string $exception): void
    {
        if (class_exists($exception)) {
            $errors = $this->validator->validate($model);
            $errorMessages = [];
            if ($errors->count()) {
                foreach ($errors as $error) {
                    /** @var ConstraintViolation $error */
                    $errorMessages[$error->getPropertyPath()] = $error->getMessage();
                }
                $exception = new $exception(json_encode($errorMessages, JSON_OBJECT_AS_ARRAY));

                throw $exception;
            }
        } else {
            throw new Exception(sprintf('Exception class %s not found', $exception));
        }
    }
}
