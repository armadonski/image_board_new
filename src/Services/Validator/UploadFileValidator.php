<?php

namespace App\Services\Validator;

use App\Exception\InvalidUploadFileException;
use App\Model\ModelInterface;

class UploadFileValidator extends AbstractValidator
{
    public function validate(ModelInterface $model): void
    {
        $this->throwError($model, InvalidUploadFileException::class);
    }
}